import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/common/shared.module';

import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutComponent],
      imports: [RouterTestingModule, SharedModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input field with class name.', () => {
    const el = fixture.debugElement.query(By.css('.name'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('placeholder')).toEqual(
      'Enter Your Name'
    );
  });

  it('should have an input field with class cvNumber.', () => {
    const el = fixture.debugElement.query(By.css('.cvNumber'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('placeholder')).toEqual('xxx');
  });

  it('should have an input field with class eDate.', () => {
    const el = fixture.debugElement.query(By.css('.eDate'));
    expect(el).toBeTruthy();
  });

  it('should have an input field with class cNumber.', () => {
    const el = fixture.debugElement.query(By.css('.cNumber'));
    expect(el).toBeTruthy();
  });
});
