import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DesignService {
  movieDetailUrl='http://localhost:4400/movies'
  registerUrl="http://localhost:4400/register"
  loginUrl="http://localhost:4400/login"
  userName=new BehaviorSubject('')
  constructor(private http:HttpClient,private router:Router) { }
  getMovieDetail(){
    return this.http.get(this.movieDetailUrl)
  }
  watchParticularMovie(_id:any){
    return this.http.get(`${this.movieDetailUrl}/${_id}`)
  }
  signUp(details:any){
    return this.http.post(this.registerUrl,details)
   }
   signIn(loginDetails:any){
    return this.http.post(this.loginUrl,loginDetails,{observe:'response'})
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('mobile')
    localStorage.removeItem('email')
    localStorage.removeItem('img')
    this.router.navigate(['/'])
  }
  searchMovie(name){
    return this.http.get(`http://localhost:4400/search/${name}`)
  }
  categoryData(){
    return this.http.get('http://localhost:4400/category')
  }
  filterData(name){
    return this.http.get(`http://localhost:4400/category/${name}`)
  }
}
