import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { ProfileComponent } from './componants/profile/profile.component';
import { SignInComponent } from './componants/sign-in/sign-in.component';
import { SignUpComponent } from './componants/sign-up/sign-up.component';
import { NotFoundComponent } from './componants/not-found/not-found.component';
import { SignOutComponent } from './componants/sign-out/sign-out.component';
import {ReactiveFormsModule} from '@angular/forms'
import{HttpClientModule} from "@angular/common/http"
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
    SignOutComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
