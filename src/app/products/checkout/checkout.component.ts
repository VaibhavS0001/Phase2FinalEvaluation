import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private aRoute: ActivatedRoute, private fb: FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, new Date().getMonth(), new Date().getDate() + 1);
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

  submit(){
    console.log(this.paymentForm.valid)
    console.log(this.paymentForm.value)
  }
}
