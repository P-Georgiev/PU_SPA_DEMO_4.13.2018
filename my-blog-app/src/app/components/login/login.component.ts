import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  private email: string;
  private password: string;

  ngOnInit() {
  }

  onLogin(form: NgForm){
    this.email = form.value.email;
    this.password = form.value.password;
    this.authService.login(this.email, this.password);
  }

}
