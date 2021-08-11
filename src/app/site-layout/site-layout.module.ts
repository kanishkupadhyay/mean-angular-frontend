import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule}from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  exports:[HeaderComponent,FooterComponent,HomeComponent,ErrorComponent]
})
export class SiteLayoutModule { }
