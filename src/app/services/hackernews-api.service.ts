import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsItem } from '../shared/models/news-item.model';


// Service that will connect to the Hacker News API
@Injectable({
  providedIn: 'root'
})
export class HackernewsApiService {

  public baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'https://hacker-news.firebaseio.com/v0';
   }

   public getTopStories(): Observable<NewsItem[]>{
      /* Return the top stories to display */
    return this.http.get<NewsItem[]>(`${this.baseURL}/topstories.json`).pipe(map(response => response ));
   }

   public getNewestStories(): Observable<NewsItem[]>{
    /* Return the most recent stories to display */
  return this.http.get<NewsItem[]>(`${this.baseURL}/newstories.json`).pipe(map(response => response ));
 }

 public getShowStories(): Observable<NewsItem[]>{
  /* Return the most recent show stories to display */
return this.http.get<NewsItem[]>(`${this.baseURL}/showstories.json`).pipe(map(response => response ));
}

public getAskStories(): Observable<NewsItem[]>{
  /* Return the most recent ask stories to display */
return this.http.get<NewsItem[]>(`${this.baseURL}/askstories.json`).pipe(map(response => response ));
}

public getJobStories(): Observable<NewsItem[]>{
  /* Return the most recent job stories to display */
return this.http.get<NewsItem[]>(`${this.baseURL}/jobstories.json`).pipe(map(response => response ));
}

   public getItem(id: number): Observable<any> {
    /* Return each individual item ID */
    return this.http.get(`${this.baseURL}/item/${id}.json`).pipe(map(response => response));
  }


}
