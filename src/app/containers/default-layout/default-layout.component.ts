import { Component, OnInit } from '@angular/core';

import { navItems } from './_nav';
import { LoginAuthService } from '../../services/loginServices/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  logo: any;
  public navItems = navItems;

  constructor(private loginAuthService: LoginAuthService) {}

  ngOnInit(): void {
    this.logo = this.loginAuthService.getUser.schoolLogo;
    console.log(this.logo);
  }
}
