import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { LoginAuthService } from '../../../services/loginServices/login.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {
  @Input() sidebarId: string = 'sidebar';
  userData: any;

  public newMessages = new Array(4);
  public newTasks = new Array(5);
  public newNotifications = new Array(5);

  constructor(
    private classToggler: ClassToggleService,
    private loginService: LoginAuthService,
    private route: Router
  ) {
    super();
  }

  ngOnInit(): void {
    console.log(this.loginService.isLoggedIn);
    if (this.loginService.isLoggedIn) {
      this.userData = this.loginService.getUser;
    }
  }

  logout() {
    this.loginService.logOut();
    this.route.navigate(['./']);
  }
}
