import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news/news.service';
import { News } from 'src/app/services/news/news.service.type';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.scss'],
})
export class NewsInfoPageComponent implements OnInit {
  constructor(
    private _newsService: NewsService,
    private _route: ActivatedRoute
  ) {}

  public news: News | null = null;

  public ngOnInit(): void {
    this._newsService
      .getNews(this._route.snapshot.params['url'])
      .pipe()
      .subscribe((v) => {
        this.news = v;
      });
  }
}
