import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../user/user.service';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  const fakeUrls = ['/', '/cart', '/products', '/checkout'];
  let guard: AuthGuardService;
  let authService: UserService;
  let routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
  const dummyRoute = {} as RouterStateSnapshot;
  
  beforeEach(() => {
    guard = new AuthGuardService(routerSpy, authService);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check is user is logged in and the access is granted', () => {
    sessionStorage.setItem('isAuthenticated', 'true');
    var isTrue = sessionStorage.getItem('isAuthenticated') === 'true';
    expect(isTrue).toBeTruthy();
    fakeUrls.forEach((fakeUrl) => {
      const isAccessGranted = guard.checkLoggedin(fakeUrl);
      expect(isAccessGranted).toBeTrue();
      const canActivate = guard.canActivate(
        dummyRoute
      );
      expect(canActivate).toBeTrue();
    });
  });

  it('should check is user is logged out', () => {
    sessionStorage.setItem('isAuthenticated', 'false');
    var isFalse = sessionStorage.getItem('isAuthenticated') === 'false';
    expect(isFalse).toBeTruthy();
  });
});
