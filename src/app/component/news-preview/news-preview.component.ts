import { Component, Input } from '@angular/core';
import { News } from 'src/app/services/news/news.service.type';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss'],
})
export class NewsPreviewComponent {
  @Input() public news: News | null = null;
}
