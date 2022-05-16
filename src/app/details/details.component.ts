
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDe } from '../models/movie.model'
import { MovieDataService } from '../movie-data.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  moviedetail: MovieDe ;
  constructor(private actRoute:ActivatedRoute,private pObj:MovieDataService) { }

  ngOnInit(): void {
    let rank=this.actRoute.snapshot.params.rank;

    this.pObj.getUserByRank(rank).subscribe(
      obj=>{
          this.moviedetail=obj;
          console.log(this.moviedetail);
      },
      err=>{
        alert("Something went wrong");
        console.log(err);
      }
    )

  }

}


/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

*/






