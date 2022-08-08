import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/services/news/news.service.type';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss'],
})
export class NewsPreviewComponent {
  constructor(private _router: Router) {}

  @Input() public news: News | null = null;
  @Input() public localNews: boolean = false;

  public goToNews(url: string | null) {
    if (!url) {
      return;
    }
    this._router.navigateByUrl(url.split('/')[1]);
  }
}
