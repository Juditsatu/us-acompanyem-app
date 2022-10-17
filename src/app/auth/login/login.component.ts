import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  })

  constructor( 
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password)
      .subscribe( valid => {

        console.log(valid)

        if (this.loginForm.value && valid === true) {
          this.router.navigateByUrl('/data/home');
        } else {
          // Swal.fire('Error', valid, 'error');
        }
      })
  }

}
