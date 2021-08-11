import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private design: DesignService,private router:Router) { }
  loginDetails: any = {
    email: '',
    password: ''
  }
  token: any = ''
  user:any=''
  ngOnInit(): void {
  }
  onLogin(myForm) {
    const email = myForm.controls.email.value
    const password = myForm.controls.password.value
    if (myForm.invalid) {
      alert("Please fill up the form")
    }
    if (myForm.valid) {
      this.loginDetails = {
        email: email,
        password: password
      }
      this.design.signIn(this.loginDetails).subscribe(data => {
        this.token = data
        console.log(data)

        this.token = data
        if (data.status === 201) {
          alert("user login succesfully")
          localStorage.setItem('token', this.token.body.token)
          localStorage.setItem('user',this.token.body.data.name)
          localStorage.setItem('mobile',this.token.body.data.phone)
          localStorage.setItem('email',this.token.body.data.email)
       
          this.design.userName.next(this.token.body.data.name)
          this.router.navigate(['/all-video'])
        }
        else if(data.status==400){
          alert("user does'nt exist")
        }
        else {
          alert("invalid credentials")
        }
      })


    }

  }
}
