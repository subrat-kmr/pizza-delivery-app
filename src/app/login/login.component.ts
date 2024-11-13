import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../service/auth.service';
import { ToastNotificationComponent } from '../toast-notification/toast-notification.component';
import * as UserActions from '../store/actions/user.actions';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = {
    email: '',
    password: ''
  };
  loogedInUser!:any

  constructor(public authService:AuthService,private toast: ToastNotificationComponent,
    private route:Router,private store: Store){

  }

  onSubmit() {
    this.authService.login(this.user).subscribe((res) => {
      console.log(res)
      this.loogedInUser = res
      this.store.dispatch(UserActions.setUser(res));
      setTimeout(() => {
        this.route.navigate(['/pizzas'])
      }, 3000);
      this.toast.show('Operation successful!', 'success');
    },
    (error) => {
      console.error('Login failed:', error);
      this.toast.show('An error occurred!', 'error');
    })
  }
}
