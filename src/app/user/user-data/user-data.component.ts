import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  userName=''
  phone:any=''
  email:any=''
  show:boolean=true
  imgSrc=''
  img:any=''
  constructor(private router:Router) { 
    if(localStorage.getItem('img')){
      this.img=localStorage.getItem('img')
    }
    else{
      this.img='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
    }
   }

  ngOnInit(): void {
   this.phone= localStorage.getItem('mobile')
   this.userName=localStorage.getItem('user')
   this.email=localStorage.getItem('email')
   }
   uploadImg(){
  this.show=false
  }
  uploadSubmit(val){
     this.imgSrc=val.controls.src.value
    localStorage.setItem('img',this.imgSrc)
    this.img=localStorage.getItem('img')
    alert("image  uploaded successfully")
    this.router.navigate(['/'])
  }
}
