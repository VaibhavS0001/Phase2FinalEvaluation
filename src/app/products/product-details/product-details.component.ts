import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  /**
   * Variable Declarations
   */
  role!: any;
  updateProduct: any;
  addProduct: any;
  file_store!: FileList;
  switch: boolean = true;
  file_list: Array<string> = [];

  /**
   * constructor
   * @param fb for Form Builder
   * @param data for fetching the data that has been passed to the dialog
   * @param dialogRef for returning the data in a callback
   */
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProductDetailsComponent>
  ) {}

  /**
   * On Initialization gets the role of user
   */
  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
    this.initUpdateForm();
    this.initAddForm();
  }

  /**
   * On click of close return false
   */
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  /**
   * On click on Add to cart returns the product
   * to product List with corresponding type
   */
  saveToCart() {
    this.dialogRef.close({ res: this.data.product, type: 'saveToCart' });
  }

  /**
   * On click on Delete returns the product
   * to product List with corresponding type
   */
  delete(): void {
    this.dialogRef.close({ res: this.data.product, type: 'delete' });
  }

  /**
   * On click on Edit Button changes the view to update the product
   */
  edit(): void {
    this.switch = !this.switch;
  }

  /**
   * Initializes the update form with form Group
   * and populate it with saved details
   */
  initUpdateForm() {
    this.updateProduct = this.fb.group({
      name: new FormControl(this.data.product?.name, Validators.required),
      price: new FormControl(this.data.product?.price, Validators.required),
      category: new FormControl(
        this.data.product?.category,
        Validators.required
      ),
      subCategory: new FormControl(
        this.data.product?.subCategory,
        Validators.required
      ),
      rating: new FormControl(this.data.product?.rating, Validators.required),
      display: new FormControl(this.data.product?.image, Validators.required),
    });
  }

  initAddForm() {
    this.addProduct = this.fb.group({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      subCategory: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      display: new FormControl('', Validators.required),
    });
  }

  /**
   * On click on update button returns the updated product
   * to product List with corresponding type
   */
  update(): void {
    let res: IProduct;
    if (this.updateProduct.get('display').touched) {
      res = {
        id: this.data.product.id,
        name: this.updateProduct.get('name').value,
        price: this.updateProduct.get('price').value,
        category: this.updateProduct.get('category').value,
        subCategory: this.updateProduct.get('subCategory').value,
        rating: this.updateProduct.get('rating').value,
        image: `../../assets/images/${this.file_store[0].name}`,
        customerReviews: this.data.product.customerReviews,
        views: this.data.product.views,
      };
    } else {
      res = {
        id: this.data.product.id,
        name: this.updateProduct.get('name').value,
        price: this.updateProduct.get('price').value,
        category: this.updateProduct.get('category').value,
        subCategory: this.updateProduct.get('subCategory').value,
        rating: this.updateProduct.get('rating').value,
        image: this.data.product.image,
        customerReviews: this.data.product.customerReviews,
        views: this.data.product.views,
      };
    }
    this.dialogRef.close({ res: res, type: 'update' });
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  add(): void {
    let res: IProduct;
    res = {
      id: this.getRandomInt(10000),
      name: this.addProduct.get('name').value,
      price: this.addProduct.get('price').value,
      category: this.addProduct.get('category').value,
      subCategory: this.addProduct.get('subCategory').value,
      rating: this.addProduct.get('rating').value,
      image: `../../assets/images/${this.file_store[0].name}`,
      customerReviews: [],
      views: this.getRandomInt(10),
    };
    this.dialogRef.close({ res: res, type: 'add' });
  }

  /**
   * handles displaying of name of file to file input field
   * @param l is file name
   */
  handleFileInputChange(l: any): void {
    if(this.data.type === 'addProducts' ){
      this.file_store = l;
      if (l.length) {
        const f = l[0];
        const count = l.length > 1 ? `(+${l.length - 1} files)` : '';
        this.addProduct.get('display').patchValue(`${f.name}${count}`);
      } else {
        this.addProduct.get('display').patchValue('');
      }
    }else{
      this.file_store = l;
      if (l.length) {
        const f = l[0];
        const count = l.length > 1 ? `(+${l.length - 1} files)` : '';
        this.updateProduct.get('display').patchValue(`${f.name}${count}`);
      } else {
        this.updateProduct.get('display').patchValue('');
      }
    }
  }
}
