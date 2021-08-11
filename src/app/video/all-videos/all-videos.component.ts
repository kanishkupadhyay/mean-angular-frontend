import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.css']
})
export class AllVideosComponent implements OnInit {
   images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  movies:any=[]
  spinner:boolean=true
  category:any=[]
  constructor(private design:DesignService) { 
    this.design.categoryData().subscribe(data=>{
      this.category=data
    })
  }

  ngOnInit(): void {
    this.design.getMovieDetail().subscribe(data=>{
      console.log(data)
      this.movies=data
      this.spinner=false
    })
  }

}
