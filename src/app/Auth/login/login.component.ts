import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LoginAuthService } from '../../services/loginServices/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginAuthService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get loginControls() {
    return this.loginForm.controls;
  }

  login() {
    console.log(this.loginForm.value.email);
    let formData = new FormData();
    formData.append('email', this.loginForm.value.email);
    formData.append('password', this.loginForm.value.password);
    this.loginService.login(formData).subscribe(
      (res: any) => {
        console.log(res);

        this.router.navigate(['/dashboard']);
        this.toaster.success('Logged in Successfully!!');
      },
      (err: any) => {
        this.toaster.error('Login failed..');
      }
    );
    console.log(this.loginForm.value);
  }
}
