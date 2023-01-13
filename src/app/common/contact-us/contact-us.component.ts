import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  /**
   * Variable declarations
   */
  navButton: string = 'login';
  contactUs: any;

  /**
   * constructor
   * @param fb for Form Builder
   * @param snackBar for custom alert messages 
   */
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  /**
   * On Initialization it will check for user authentication
   * if user is authenticated then change navButton to Logout
   * otherwise Login.
   */
  ngOnInit(): void {
    if (sessionStorage.getItem('isAuthenticated') == 'true') {
      this.navButton = 'Logout';
    } else {
      this.navButton = 'Login';
    }
    this.initContactUs();
  }

  /**
   * Contact Us form initalizes
   */
  initContactUs(): void {
    this.contactUs = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }

  /**
   * Sends user message to the site owner
   */
  send() {
    this.snackBar.open(
      "We have recieved your request we'll be in touch shortly",
      'close',
      {
        duration: 3000,
      }
    );
    this.contactUs.reset();
  }
}
