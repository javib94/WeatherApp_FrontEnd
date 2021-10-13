import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './src/app/components/home/home.component';
import { LoginComponent } from './src/app/components/login/login.component';
import { Page404Component } from './src/app/components/page404/page404.component';
import { PreferenceComponent } from './src/app/components/preference/preference.component';
import { ProfileComponent } from './src/app/components/profile/profile.component';
import { RegisterComponent } from './src/app/components/register/register.component';
import { UserComponent } from './src/app/components/user/user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user/preference', component: PreferenceComponent},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
