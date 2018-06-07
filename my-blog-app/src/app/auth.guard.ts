import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(sessionStorage.getItem("currentUser") != null){
      console.log(sessionStorage.getItem("currentUser"));
      return true;
  }
  else {
      this.router.navigate(["/home"]);
      console.log(sessionStorage.getItem("currentUser"));
      return false;
}
  }
}
