import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './src/app/components/login/login.component';
import { HomeComponent } from './src/app/components/home/home.component';
import { NavBarComponent } from './src/app/components/nav-bar/nav-bar.component';
import { Page404Component } from './src/app/components/page404/page404.component';
import { UserComponent } from './src/app/components/user/user.component';
import { ProfileComponent } from './src/app/components/profile/profile.component';
import { PreferenceComponent } from './src/app/components/preference/preference.component';
import { RegisterComponent } from './src/app/components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    Page404Component,
    UserComponent,
    ProfileComponent,
    PreferenceComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
