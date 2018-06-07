import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  private email: string;
  private password: string;

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    this.email = form.value.email;
    this.password = form.value.password;
    this.authService.register(this.email, this.password);
}

}
