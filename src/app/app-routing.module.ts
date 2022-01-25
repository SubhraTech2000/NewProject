import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authetication/login/login.component';
import { SignupComponent } from './authetication/signup/signup.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
 
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
