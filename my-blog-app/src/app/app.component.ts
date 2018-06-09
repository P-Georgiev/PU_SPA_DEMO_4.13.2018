import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyC-X4FNGrAngi7sy_6RA99pFpziB4pKrBI",
      authDomain: "my-blog-app-27b09.firebaseapp.com",
      databaseURL: "https://my-blog-app-27b09.firebaseio.com",
      projectId: "my-blog-app-27b09",
      storageBucket: "my-blog-app-27b09.appspot.com",
      messagingSenderId: "57867251549"

    })
  }
}
