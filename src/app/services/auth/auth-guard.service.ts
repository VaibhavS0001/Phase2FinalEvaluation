import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private router: Router, private authService: UserService) {}

  canActivate(state: RouterStateSnapshot) {
    return this.checkLoggedin(state.url);
  }
  checkLoggedin(url: string) {
    if (sessionStorage.getItem('isAuthenticated') == 'true') {
      return true;
    }
    this.authService.redirectToUrl = url;
    this.router.navigate(['']);
    return false;
  }
}
