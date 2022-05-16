import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Applicant } from './models/movie.model';
import { MovieDe } from './models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

    constructor(private hc:HttpClient) { }
  getUnknownData():Observable<any>
  {
     return this.hc.get<any>("https://imdb-api.com/en/API/Top250Movies/k_ad42sz17")    //("https://imdb-api.com/en/API/MostPopularMovies/k_ad42sz17");                
                                                                                      /*("https://reqres.in/api/unknown");*/
  } 

  getUsersData():Observable<Applicant[]>
  {
     return this.hc.get<Applicant[]>("https://jsonplaceholder.typicode.com/users");
  } 
  getUserByRank(rank): Observable<MovieDe>{
   return this.hc.get<MovieDe>("https://imdb-api.com/en/API/MostPopularMovies/k_ad42sz17"+rank);
}
}

   

