import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  constructor(private http: HttpClient) { }

  getUrls(): Observable<any> {
    let jsonUrl = './assets/urls.json'; // Path to your JSON file
    return this.http.get<any>(jsonUrl);
  ;
  }

 



  getData(): Observable<any[]> {
    let jsonUrl = './assets/data.json'; 
    return this.http.get<any[]>(jsonUrl);  // Return an Observable array of objects
  }
}
