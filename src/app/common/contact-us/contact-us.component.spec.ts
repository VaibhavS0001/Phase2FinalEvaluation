import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared.module';

import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactUsComponent],
      imports: [SharedModule, BrowserAnimationsModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should check that form has following input fields and a submit button', () => {
    it('should check for input with class name', () => {
      const el1 = fixture.debugElement.query(By.css('.name'));
      expect(el1).toBeTruthy();
    });
    it('should check for input with class email', () => {
      const el1 = fixture.debugElement.query(By.css('.email'));
      expect(el1).toBeTruthy();
    });
    it('should check for input with class message', () => {
      const el1 = fixture.debugElement.query(By.css('.message'));
      expect(el1).toBeTruthy();
    });
    it('should check for input with class send', () => {
      const el1 = fixture.debugElement.query(By.css('.send'));
      expect(el1).toBeTruthy();
      expect(el1.nativeElement.disabled).toBeTruthy();
    });
  });
});
