import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/common/shared.module';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('MatDialogRef', ['close']);
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      imports: [SharedModule, BrowserAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: { spy } },
        { provide: MAT_DIALOG_DATA, useValue: 'spy1' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateForm', () => {
    beforeEach(() => {
      component.switch = false;
      fixture.detectChanges();
    });
    it('should have an input field with class name.', () => {
      const el = fixture.debugElement.query(By.css('.name'));
      expect(el).toBeTruthy();
      expect(el.nativeElement.getAttribute('placeholder')).toEqual(
        'Enter Your Name'
      );
    });

    it('should have an input field with class price.', () => {
      const el = fixture.debugElement.query(By.css('.price'));
      expect(el).toBeTruthy();
      expect(el.nativeElement.getAttribute('placeholder')).toEqual(
        'Enter the Price'
      );
    });

    it('should have an input field with class rating.', () => {
      const el = fixture.debugElement.query(By.css('.rating'));
      expect(el).toBeTruthy();
      expect(el.nativeElement.getAttribute('placeholder')).toEqual(
        'Enter the Ratings'
      );
    });

    it('should have an input field with class category.', () => {
      const el = fixture.debugElement.query(By.css('.category'));
      expect(el).toBeTruthy();
    });

    it('should have an input field with class display.', () => {
      const el = fixture.debugElement.query(By.css('.display'));
      expect(el).toBeTruthy();
    });

    it('should have an input field with class subCategory.', () => {
      const el = fixture.debugElement.query(By.css('.subCategory'));
      expect(el).toBeTruthy();
    });
  });
  
  describe('addForm', () => {
    beforeEach(() => {
      component.switch = false;
      fixture.detectChanges();
    });
    it('should have an input field with class name.', () => {
      const el = fixture.debugElement.query(By.css('.name'));
      expect(el).toBeTruthy();
      expect(el.nativeElement.getAttribute('placeholder')).toEqual(
        'Enter Your Name'
      );
    });

    it('should have an input field with class price.', () => {
      const el = fixture.debugElement.query(By.css('.price'));
      expect(el).toBeTruthy();
      expect(el.nativeElement.getAttribute('placeholder')).toEqual(
        'Enter the Price'
      );
    });

    it('should have an input field with class rating.', () => {
      const el = fixture.debugElement.query(By.css('.rating'));
      expect(el).toBeTruthy();
      expect(el.nativeElement.getAttribute('placeholder')).toEqual(
        'Enter the Ratings'
      );
    });

    it('should have an input field with class category.', () => {
      const el = fixture.debugElement.query(By.css('.category'));
      expect(el).toBeTruthy();
    });

    it('should have an input field with class display.', () => {
      const el = fixture.debugElement.query(By.css('.display'));
      expect(el).toBeTruthy();
    });

    it('should have an input field with class subCategory.', () => {
      const el = fixture.debugElement.query(By.css('.subCategory'));
      expect(el).toBeTruthy();
    });
  });
});
