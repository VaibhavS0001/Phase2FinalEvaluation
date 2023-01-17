import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CartListService } from 'src/app/services/cart/cart-list.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavBarComponent {
  /**
   * Varaible Declarations
   */
  title = 'InstaSMart';
  data: any;
  links: Array<string> = [
    '/products/productList/fruits',
    '/products/productList/veges',
    '/products/productList/electronics',
  ];

  /**
   * Parent to Child property Bindings
   */
  @Input() route!: string;
  @Input() buttons: string = 'Login';
  @Input() badge: number = 0;
  /**
   * constructor
   * @param router for navigating to other routes
   * @param cartService for getting number of products in cart
   */
  constructor(private router: Router, private cartService: CartListService) {}

  ngOnInit(): void {
    if (this.buttons == 'Logout') {
      let dummy = {
        email: 'login',
        id: 0,
        name: 'you are not logged in yet',
        password: 'login',
        role: 'login',
      };
      this.data = JSON.parse(sessionStorage.getItem('loggedInUser') || JSON.stringify(dummy)).name;
    }
    this.badge = this.cartService.getProduct().products.length;
  }

  /**
   * For logging out and if logged out then redirect back to login page
   */
  LogIn_Logout() {
    if (this.buttons == 'Logout') {
      sessionStorage.setItem('isAuthenticated', 'false');
      sessionStorage.removeItem('role');
      sessionStorage.removeItem('loggedInUser');
      setTimeout(() => {
        this.router.navigate(['/home'], { replaceUrl: true });
      }, 0.5);
      this.router.navigate(['']);
    } else if (this.buttons == 'Login') {
      this.router.navigate([''], { replaceUrl: true });
    }
  }
}
