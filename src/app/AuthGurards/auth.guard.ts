import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginAuthService } from '../services/loginServices/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(LoginAuthService).isLoggedIn
    ? true
    : inject(Router).createUrlTree(['./auth/login']);
};
