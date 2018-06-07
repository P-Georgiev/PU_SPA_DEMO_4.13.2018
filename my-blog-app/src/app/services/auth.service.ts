import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  register(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      response => {
        this.router.navigate(['/login']);
      }
    )
    .catch(
      error => console.log(error)
    );
  }

  login(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        console.log(response);
        sessionStorage.setItem("currentUser", response.user["email"]);
        this.router.navigate(["/home"]);
      }
    ).catch(
      error => alert("Wrong credentials!")
    );
  }

  isLogged(){
    if(sessionStorage.getItem("currentUser") != null){
      return true;
    }else{
      return false;
    }
  }

}
