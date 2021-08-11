import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-category-data',
  templateUrl: './category-data.component.html',
  styleUrls: ['./category-data.component.css']
})

export class CategoryDataComponent implements OnInit {
  category:any=[]
  movies:any=[]
  spinner:boolean=true
  constructor(private design:DesignService,private router:ActivatedRoute) {
    this.design.categoryData().subscribe(data=>{
      this.category=data
    })
    this.design.filterData(this.router.snapshot.params.name).subscribe(data=>{
     this.movies=data
     this.spinner=false
    })
    
   }

  ngOnInit(): void {
  }

}
