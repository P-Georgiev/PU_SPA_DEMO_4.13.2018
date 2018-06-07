import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLogged(){
    if(this.authService.isLogged()){
      return true;
    }else{
      return false;
    }
  }

  onLogout(){
    this.authService.logout();
  }

}
