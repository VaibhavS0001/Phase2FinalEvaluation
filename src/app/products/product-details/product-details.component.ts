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
  role!: any;
  switch: boolean = true;
  updateProduct: any;
  file_store!: FileList;
  file_list: Array<string> = [];

  constructor(
    public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
    this.initUpdateForm();
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  saveToCart() {
    this.dialogRef.close({ res: this.data.product, type: 'saveToCart' });
  }

  delete(): void {
    this.dialogRef.close({ res: this.data.product, type: 'delete' });
  }

  edit(): void {
    this.switch = !this.switch;
  }

  initUpdateForm() {
    this.updateProduct = this.fb.group({
      name: new FormControl(this.data.product?.name, Validators.required),
      price: new FormControl(this.data.product?.price, Validators.required),
      category: new FormControl(
        this.data.product?.category,
        Validators.required
      ),
      rating: new FormControl(this.data.product?.rating, Validators.required),
      display: new FormControl(this.data.product?.image, Validators.required),
    });
  }

  update(): void {
    let res: IProduct
    if (this.updateProduct.get('display').touched) {
       res = {
        id: this.data.product.id,
        name: this.updateProduct.get('name').value,
        price: this.updateProduct.get('price').value,
        category: this.updateProduct.get('category').value,
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
        rating: this.updateProduct.get('rating').value,
        image: this.data.product.image,
        customerReviews: this.data.product.customerReviews,
        views: this.data.product.views,
      };
    }
    this.dialogRef.close({ res: res, type: 'update' });
  }

  handleFileInputChange(l: any): void {
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
