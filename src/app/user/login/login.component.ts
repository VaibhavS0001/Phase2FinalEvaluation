import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUsers } from 'src/app/state/user/user.selectors';
import { UserState } from 'src/app/state/user/user.state';
import { IUser } from '../user.model';
import * as UserActions from '../../state/user/user.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  loginForm!: any;
  users!: IUser[];
  
  /**
   * Observable for get all users
   */
  public allUsers: Observable<IUser[]> = this.store.select(getUsers);
  
  /**
   * Constructor
   * @param fb for Reactive Form Builder
   * @param store for managing the user state
   * @param route for navigating to other components
   * @param _snackBar for displaying custom alert messages
   */
  constructor(
    private fb: FormBuilder,
    private store: Store<UserState>,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}

  /**
   * On initialization checks for Authentication
   * if not authenticated then loads all the users 
   */
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
      password: ['', [Validators.required, Validators.maxLength(14), /* Validators.pattern('[a-z]{3} *[A-Z]{3} *[0-9]{3} *[@]{1}') */]],
    });
  }

  /**
   * Perform login action by validating users and authenticating them.
   * once user is authenticated redirects to home page
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
