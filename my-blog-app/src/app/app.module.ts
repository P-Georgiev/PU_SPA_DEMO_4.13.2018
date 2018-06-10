import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BlogService } from './services/blog.service';

import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FooterComponent,
    LandingPageComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    BlogComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [AuthService, AuthGuard, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
