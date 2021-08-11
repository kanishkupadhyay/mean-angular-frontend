import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule}from '@angular/forms';
import { UserDataComponent } from './user-data/user-data.component'
import{RouterModule}from '@angular/router'
import {MaterialModule}from '../material/material.module'
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  exports:[LoginComponent,RegisterComponent,UserDataComponent]
})
export class UserModule { }
