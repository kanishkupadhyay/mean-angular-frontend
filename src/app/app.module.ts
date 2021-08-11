import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule}from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SiteLayoutModule}from './site-layout/site-layout.module';
import{FormsModule}from '@angular/forms';
import {UserModule}from './user/user.module';
import{VideoModule}from './video/video.module'
import{HttpClientModule}from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import{AuthGuard}from './auth-guard/auth.guard';
import{MaterialModule}from './material/material.module'
@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SiteLayoutModule,
    RouterModule,
    FormsModule,
    UserModule,
    VideoModule,
    HttpClientModule,
    NgbModule,
    MaterialModule
    // AuthGuard
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
