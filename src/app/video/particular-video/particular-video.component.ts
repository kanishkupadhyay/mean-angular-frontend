import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-particular-video',
  templateUrl: './particular-video.component.html',
  styleUrls: ['./particular-video.component.css']
})
export class ParticularVideoComponent implements OnInit {
video:any=[]
opacity:boolean=true;
spinner:boolean=true
  constructor(private route:ActivatedRoute,private design:DesignService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params.id
    this.design.watchParticularMovie(id).subscribe(data=>{
      this.video=data
      this.spinner=false
    })
  }

}
