import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  navButton: string = 'login';
  contactUs: any;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('isAuthenticated') == 'true') {
      this.navButton = 'Logout';
    } else {
      this.navButton = 'Login';
    }
    this.initContactUs();
  }

  initContactUs(): void {
    this.contactUs = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }

  send() {
    this.snackBar.open(
      "We have recieved your request we'll be in touch shortly",
      'close',
      {
        duration: 3000,
      }
    );
    this.contactUs.reset()
  }
}
