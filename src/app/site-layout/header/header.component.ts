import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:any=''
  constructor(public design:DesignService) { }

  ngOnInit(): void {
   this.user=localStorage.getItem('user')
  // this.design.userName.subscribe(data=>{
  //   this.user=data
  // })
  }

}
