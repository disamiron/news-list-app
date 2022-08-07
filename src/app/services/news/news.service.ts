import { Injectable } from '@angular/core';
import { News } from './news.service.type';
import { HttpClient } from '@angular/common/http';
import { NEWS_URL } from 'src/app/data/constants';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public Limit = 10;

  public getNews(page: number) {
    return this.http.get<{ news: News[] }>(NEWS_URL + page + '/' + this.Limit);
  }
}
