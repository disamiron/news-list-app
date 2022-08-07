import { Component, OnInit } from '@angular/core';
import { NewsService } from './services/news/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _newsService: NewsService) {}

  public ngOnInit(): void {}
}
