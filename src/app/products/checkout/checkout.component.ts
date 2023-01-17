import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CartListService } from 'src/app/services/cart/cart-list.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  navButton: string = 'Login';
  total: number = 0;
  paymentForm: any;
  minDate: Date;
  maxDate: Date;

  constructor(
    private aRoute: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private cartService: CartListService
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(
      currentYear - 0,
      new Date().getMonth(),
      new Date().getDate() + 1
    );
    this.maxDate = new Date(currentYear + 10, 11, 31);
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('isAuthenticated') == 'true') {
      this.navButton = 'Logout';
      this.aRoute.paramMap.subscribe((params: any) => {
        this.total = params.params.total;
      });
    } else {
      this.navButton = 'Login';
    }
    this.initPaymentForm();
  }

  initPaymentForm(): void {
    this.paymentForm = this.fb.group({
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]{3}-*[0-9]{3}-*[0-9]{3}'),
        ],
      ],
      expiryDate: ['', [Validators.required]],
      cvvNumber: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
      cardHolderName: ['', [Validators.required]],
    });
  }

  submit() {
    const dialogRef = this.dialog.open(DialogOverview, {
      data: { paymentDetails: this.paymentForm.value },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cartService.setProduct({ products: [], quantity: [] });
        this.route.navigate(['/'], {replaceUrl: true});
        this.snackBar.open(
          'Payment was successfull, your order will be delivered in a few days.',
          'close',
          {
            duration: 3000,
          }
        );
      }
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `<h1 mat-dialog-title>Transaction in Progress</h1>
    <div mat-dialog-content>
      <mat-spinner class="m-auto"></mat-spinner>
      <div class="adjust">
        <p>Please be patient</p>
      </div>
    </div>`,
  styleUrls: ['./checkout.component.scss'],
})
export class DialogOverview {
  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close(true);
    }, 5000);
  }
}
