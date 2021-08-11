import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { DesignService } from '../service/design.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private design:DesignService,private router:Router){}
  canActivate():boolean{
if(this.design.loggedIn()){
  return true
}
else{
  this.router.navigate(['/login'])
  return false
}
  }
}
  
  