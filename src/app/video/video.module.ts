import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllVideosComponent} from './all-videos/all-videos.component';
import { ParticularVideoComponent } from './particular-video/particular-video.component';
import {RouterModule}from '@angular/router'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SearchVideoComponent } from './search-video/search-video.component';
import{MaterialModule}from '../material/material.module';
import { CategoryDataComponent } from './category-data/category-data.component'
@NgModule({
  declarations: [
    AllVideosComponent,
    ParticularVideoComponent,
    SearchVideoComponent,
    CategoryDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MaterialModule
  ],
  exports:[ParticularVideoComponent,
  AllVideosComponent,SearchVideoComponent,CategoryDataComponent]
})
export class VideoModule { }
