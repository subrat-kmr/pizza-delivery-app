import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../service/auth.service';
import * as UserActions from '../store/actions/user.actions';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  successMessage!: string;
  errorMessage!: string;

  constructor(private authService: AuthService, private route:Router, private store:Store) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      address: new FormControl('', Validators.required)
    });
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get address() {
    return this.registerForm.get('address');
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe((res) => {
        console.log(res)
        this.store.dispatch(UserActions.setUser(res));
        if (res.id){
          setTimeout(() => {
            this.successMessage = 'Operation successful!';
            this.route.navigate(['/pizzas'])
            setTimeout(() => {
              this.successMessage = '';
            }, 3000);
          }, 2000); 
        }
        else {
          this.handleError()
        }
      })
    }
  } 
  handleError() {
    this.errorMessage = 'An error occurred!';
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
  closeSuccessMessage() {
    this.successMessage = '';
  }
  
  closeErrorMessage() {
    this.errorMessage = '';
  }

}
