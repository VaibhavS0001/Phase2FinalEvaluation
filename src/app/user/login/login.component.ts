import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUsers } from 'src/app/state/user/user.selectors';
import { UserState } from 'src/app/state/user/user.state';
import { IUser } from '../user.model';
import * as UserActions from '../../state/user/user.actions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  /**
   * login form declaration
   */
  loginForm!: any;
  public allUsers: Observable<IUser[]> = this.store.select(getUsers);
  users!: IUser[];
  constructor(
    private fb: FormBuilder,
    private store: Store<UserState>,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if(sessionStorage.getItem('isAuthenticated') == 'true') {
      this.route.navigate(['/home']);
    }
    this.store.dispatch(UserActions.loadUsers());
    this.allUsers.subscribe((users: IUser[]): void => {
      this.users = users;
    });
    this.initLoginForm();
  }

  /**
   * login form Initialization
   */
  initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(14)]],
    });
  }

  /**
   * Perform login action by fetching users and authenticating them.
   */
  login() {
    let user = this.users.filter(
      (user) =>
        user.email === this.loginForm.get('email')?.value &&
        user.password === this.loginForm.get('password')?.value
    )[0];
    if (user) {
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));
      sessionStorage.setItem('isAuthenticated', 'true')
      sessionStorage.setItem('role', user.role)
      this.route.navigate(['/home']);
    }else{
      this._snackBar.open("Incorrect email or password", "close", {
        duration: 2000
      });
    }
  }
}
