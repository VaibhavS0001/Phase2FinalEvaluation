import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/common/shared.module';
import { Category, subCategory } from '../product.model';

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
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            product: {
              id: 80,
              name: 'Apples',
              price: '200',
              category: Category.fruits,
              subCategory: subCategory.applePear,
              rating: 5,
              image: '../assets/images/apple.png',
              customerReviews: [
                {
                  customerName: 'Jane',
                  review: 'Great Quality',
                  customerRating: 4,
                  date: '27 Dec 2015',
                  place: 'India',
                },
              ],
              views: 500,
            },
            type: 'getProducts',
          },
        },
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

    it('should have an input field with class update-btn.', () => {
      component.role = 'Admin';
      component.switch = false;
      component.data.type = 'getProducts';
      fixture.detectChanges();
      const el = fixture.debugElement.query(By.css('.update-btn'));
      expect(el).toBeTruthy();
      expect(el.nativeElement.disabled).toBeFalsy();
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

    it('should have an input field with class add-btn.', () => {
      component.role = 'Admin';
      component.data.type = 'addProducts';
      fixture.detectChanges();
      const el = fixture.debugElement.query(By.css('.add-btn'));
      expect(el).toBeTruthy();
      expect(el.nativeElement.disabled).toBeTruthy();
      const el1 = component.addProduct.get('name');
      const el2 = component.addProduct.get('price');
      const el3 = component.addProduct.get('category');
      const el4 = component.addProduct.get('subCategory');
      const el5 = component.addProduct.get('display');
      const el6 = component.addProduct.get('rating');
      el1.setValue('orange');
      el2.setValue(150);
      el3.setValue('fruits');
      el4.setValue('citrus');
      el5.setValue('/');
      el6.setValue(4.5);
      fixture.detectChanges();
      expect(el.nativeElement.disabled).toBeFalsy();
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
