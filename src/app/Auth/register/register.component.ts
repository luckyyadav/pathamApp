import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Constant } from '../../services/constant-URL/constant';
import { WebService } from '../../services/WebServices/webservices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  constructor(
    private fb: FormBuilder,
    private constant: Constant,
    private webservice: WebService
  ) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [Validators.required],
      email: [Validators.required],
      password: [Validators.required],
      number: [Validators.required],
    });
  }
  register() {
    this.webservice
      .postMethod(
        JSON.stringify(this.registerForm.value),
        this.constant.register
      )
      .subscribe((res: any) => {
        console.log(res);
      });
    console.log(this.registerForm.value);
  }
}
