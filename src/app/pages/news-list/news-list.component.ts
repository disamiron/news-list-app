import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { News } from 'src/app/services/news/news.service.type';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListPageComponent implements OnInit {
  private _page = 1;
  private _size = 10;
  private _areAllNewsFetched = false;

  constructor(private _newsService: NewsService) {}

  public newsArray: News[] = [];

  public ngOnInit(): void {
    this.getNews();
  }

  public getNews() {
    this._newsService
      .getNews(this._page)
      .pipe()
      .subscribe((v) => {
        this._areAllNewsFetched = v.totalCount < this._page * this._size;
        this.newsArray.push(...v.news);
      });
  }

  public onScroll(): void {
    if (!this._areAllNewsFetched) {
      this._page += 1;
      this.getNews();
    }
  }
}
