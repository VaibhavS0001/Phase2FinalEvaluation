import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared.module';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [SharedModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display username in navBar', () => {
    component.data = 'Vaibhav Sharma';
    fixture.detectChanges();
    expect(component.data).toEqual('Vaibhav Sharma');
  });

  it('should change the button to login once clicked on logout', () => {
    const el = fixture.debugElement.query(By.css('.loginLout'));
    expect(el).toBeTruthy();
    component.buttons = 'Logout';
    fixture.detectChanges();
    if (el.nativeElement.innerText == 'Logout') {
      el.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.buttons).toEqual('login');
      });
    }
  });
});
