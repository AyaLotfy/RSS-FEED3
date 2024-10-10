import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class RssFeedService {

  constructor(private http: HttpClient) { }
  fetchFeed(url: string): Observable<any> {

  return this.http.get<any>(`http://localhost:3000/fetch-rss?url=${encodeURIComponent(url)}`);
  }
  //workinh not cors
  // fetchFeed(url: string): Observable<any> {
  //   return this.http.get(url, { responseType: 'text' }).pipe(
  //     map((xmlString: string) => {
  //       let parsedResult;
  //       xml2js.parseString(xmlString, { explicitArray: false }, (err, result) => {
  //         if (err) {
  //           console.error('Error parsing XML', err);
  //         } else {
  //           parsedResult = result;
  //         }
  //       });
  //       return parsedResult;
  //     })
  //   );
  // }

  // Fetch the RSS feed from the URL
  // fetchRssFeed(url: string): Observable<any> {
  //   return this.http.get(url, { responseType: 'text' }).
  //   pipe(
  //     map(response => this.parseXML(response))
  //   );
  // }

  // Parse the RSS XML feed into JSON format
  // parseXML(data: string): any {
  //   let parsedResult: any;
  //   const parser = new xml2js.Parser({ explicitArray: false });
  //   parser.parseString(data, (err, result) => {
  //     parsedResult = result;
  //   });
  //   return parsedResult;
  // }
}
