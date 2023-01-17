import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from 'src/app/common/shared.module';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Login From Testing', () => {
    it('should have an input field with class email.', () => {
      const el = fixture.debugElement.query(By.css('.email'));
      expect(el).toBeTruthy();
      expect(el.nativeElement.getAttribute('placeholder')).toEqual(
        'Enter your email'
      );
    });

    it('should have an input field with class & type password and maxLength as 14', () => {
      const el = fixture.debugElement.query(By.css('.password'));

      expect(el).toBeTruthy();
      expect(el.nativeElement.getAttribute('maxlength')).toEqual('14');
      expect(el.nativeElement.getAttribute('type')).toEqual('password');

      const ctrl = component.loginForm.get('password');
      ctrl.setValue('password11');
      fixture.detectChanges();

      expect(el.nativeElement.value).toEqual('password11');
    });

    it('should check for button disabled at invalid form and form control check.', () => {
      const el = fixture.debugElement.query(By.css('.bt'));
      const el1 = fixture.debugElement.query(By.css('.email'));
      const el2 = fixture.debugElement.query(By.css('.password'));

      expect(el).toBeTruthy();
      expect(el1).toBeTruthy();
      expect(el2).toBeTruthy();

      const ctrl = component.loginForm.get('password');
      const ctrl1 = component.loginForm.get('email');
      ctrl.setValue('password11');
      ctrl1.setValue('vaib@gmail.com');

      expect(el.nativeElement.disabled).toBeTruthy();
      fixture.detectChanges();
      expect(el2.nativeElement.value).toEqual('password11');
      expect(el1.nativeElement.value).toEqual('vaib@gmail.com');
      expect(el.nativeElement.disabled).toBeFalsy();
    });
  });

  describe('Login Functionality Testing', () => {
    beforeEach(() => {
      component.users = [
        {
          id: 1,
          email: 'vaib@gmail.com',
          password: 'password11',
          name: 'Vaibhav',
          role: 'Admin',
        },
        {
          id: 2,
          email: 'vaib1@gmail.com',
          password: 'password22',
          name: 'John Smith',
          role: 'User',
        },
        {
          id: 3,
          email: 'vaib2@gmail.com',
          password: 'password22',
          name: 'James Cook',
          role: 'User',
        },
      ];
    });

    it('should check that entered email and password are matching with database or not', () => {
      const el1 = fixture.debugElement.query(By.css('.email'));
      const el2 = fixture.debugElement.query(By.css('.password'));

      expect(el1).toBeTruthy();
      expect(el2).toBeTruthy();
      const ctrl = component.loginForm.get('password');
      const ctrl1 = component.loginForm.get('email');
      ctrl.setValue('password11');
      ctrl1.setValue('vaib@gmail.com');
      fixture.detectChanges();
      let user = component.users.filter(
        (user) =>
          user.email === component.loginForm.get('email')?.value &&
          user.password === component.loginForm.get('password')?.value
      )[0];
      expect(user).toBeTruthy();
    });
  });

  it('should check is navBar is rendering or not', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav-bar')).toBeTruthy();
  });
});
