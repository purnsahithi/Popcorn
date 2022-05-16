import { Component, OnInit} from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import { Applicant } from '../models/movie.model';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  mySubscription:Subscription;
  constructor(private FD:MovieDataService,private router:Router) { }
  User:any;
  ApplicantArray:Applicant[];
  ngOnInit(){
   this.mySubscription=this.FD.getUnknownData().subscribe(
    /* data*/
     items=>{
       this.User=items; 
       console.log(this.User) 
          //data; 
     },
     err=>{
        console.log("Error occured",err);
     }
   )  
    this.FD.getUsersData().subscribe(
      data=>{
        this.ApplicantArray=data;
      },
      err=>{console.log("error occured",err)}
    );
  }

  onSelectId(rank){
    this.router.navigateByUrl('movie/'+rank);
  }

  ngOndestroy(){
    this.mySubscription.unsubscribe();
  }


}
