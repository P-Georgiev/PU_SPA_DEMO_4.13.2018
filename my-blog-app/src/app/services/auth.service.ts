import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AuthService {

  constructor(private router: Router, private toastr: ToastrService) { }

  register(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      response => {
        this.toastr.success("Register successful!");
        this.router.navigate(['/login']);
      }
    )
    .catch(
      error => {
        this.toastr.error(error.message, "Error");
      }
    );
  }

  login(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        sessionStorage.setItem("currentUser", response.user["email"]);
        this.toastr.success("Login successful!", "Success");
        this.router.navigate(["/home"]);
      }
    ).catch(
      error => this.toastr.error("Wrong credentials!", "Error")
    );
  }

  isLogged(){
    if(sessionStorage.getItem("currentUser") != null){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    sessionStorage.clear();
    this.toastr.success("Logout successful!", "Success");
  }

}
