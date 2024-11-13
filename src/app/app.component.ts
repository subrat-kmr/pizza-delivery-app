import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginComponent } from "./login/login.component";
import { Pizza } from './model/pizza.model';
import { PizzaState } from './store/pizza.state';
import { selectCartCount } from './store/selectors/pizza.selectors';
import { userInfo } from './store/selectors/user.selector';
import { ToastNotificationComponent } from "./toast-notification/toast-notification.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule, LoginComponent, ToastNotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizza-delivery-app';
  button = {
    name:'Sign Up',
    options: "New to this app? Create an Account"
  }
  isDropdownOpen = false;
  pizzas$: Observable<number>;
  user$: Observable<any>;

  constructor(public router:Router, private store: Store){
    this.pizzas$ = this.store.select(selectCartCount);
    this.user$ = this.store.select(userInfo);
    this.user$.subscribe(res => {console.log(res)})
  }

  setButton() {
    const isSignUp = this.button.name === 'Sign Up';
    this.button.name = isSignUp ? 'Log In' : 'Sign Up';
    this.button.options = isSignUp ? 'Already have an account!' : 'New to this app? Create an Account';
    this.router.navigate(isSignUp ? ['/register'] : ['/login']);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  getInitials(fullName: string): string {
    const names = fullName.split(' ');
    const initials = names[0].charAt(0).toUpperCase() + (names.length > 1 ? names[names.length - 1].charAt(0).toUpperCase() : '');
    return initials;
  }
  
}
