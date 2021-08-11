import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router';
import {DesignService}from '../../service/design.service'
@Component({
  selector: 'app-search-video',
  templateUrl: './search-video.component.html',
  styleUrls: ['./search-video.component.css']
})
export class SearchVideoComponent implements OnInit {
  name:any=this.router.snapshot.params.name
  movie:any={}
  constructor(private router:ActivatedRoute,private design:DesignService) { }

  ngOnInit(): void {
    this.design.searchMovie(this.name).subscribe(data=>{
      this.movie=data
      console.log(this.movie)
    })
  }

}
