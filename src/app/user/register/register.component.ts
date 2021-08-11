import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register={
    name:'',
    email:'',
    phone:'',
    password:'',
    confirmPassword:''
  }
  constructor(private router:Router,private design:DesignService) { }
ngOnInit(){}
  onSubmitForm(myForm){
    const password=myForm.controls.password.value
    const confirmPassword=myForm.controls.confirmPassword.value
    const name=myForm.controls.name.value
    const email=myForm.controls.email.value
    const phone=myForm.controls.phone.value
    if(myForm.invalid){
      alert("Please fill up the form")
    }
    if(password!==confirmPassword){
      alert("Passwords are not matching")
    }
    if(myForm.valid && password===confirmPassword){
    
    
      this.register={
        name:name,
        email:email,
        phone:phone,
        password:password,
        confirmPassword:confirmPassword
      }
      this.design.signUp(this.register).subscribe(data=>{
        console.log(data)
      })
    alert("user registered successfully")
    this.router.navigate(['login'])
  }
}
}

