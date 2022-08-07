import { Injectable } from '@angular/core';
import { News, NewsPack } from './news.service.type';
import { HttpClient } from '@angular/common/http';
import { NEWS_CATEGORY_URL, NEWS_URL } from 'src/app/data/constants';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public limit = 10;

  public getAllNews(page: number) {
    return this.http.get<NewsPack>(NEWS_URL + page + '/' + this.limit);
  }

  public getNews(url: string) {
    return this.http.get<News>(NEWS_URL + NEWS_CATEGORY_URL + url);
  }
}
