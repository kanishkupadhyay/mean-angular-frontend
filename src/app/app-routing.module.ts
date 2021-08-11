import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';
import { ErrorComponent } from './site-layout/error/error.component';
import { HomeComponent } from './site-layout/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserDataComponent } from './user/user-data/user-data.component';
import { AllVideosComponent } from './video/all-videos/all-videos.component';
import { CategoryDataComponent } from './video/category-data/category-data.component';
import { ParticularVideoComponent } from './video/particular-video/particular-video.component';
import{SearchVideoComponent}from './video/search-video/search-video.component'
const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {
    path:'register',component:RegisterComponent
  },
  {path:'all-video',component:AllVideosComponent,canActivate:[AuthGuard]},
  {path:'all-video/watch/:name/:id',component:ParticularVideoComponent,canActivate:[AuthGuard]},
  {path:'user',component:UserDataComponent,canActivate:[AuthGuard]},
  {path:'search-video/:name',component:SearchVideoComponent},
  {path:'filter/:name',component:CategoryDataComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 