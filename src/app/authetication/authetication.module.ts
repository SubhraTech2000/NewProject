import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutheticationRoutingModule } from './authetication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AutheticationRoutingModule
  ]
})
export class AutheticationModule { }
