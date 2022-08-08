import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { News } from 'src/app/services/news/news.service.type';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog } from '@angular/material/dialog';
import { NewsCreateComponent } from 'src/app/component/news-create/news-create.component';
import { StorageService } from 'src/app/services/storage/storage.service';
import { StorageType } from 'src/app/services/storage/storage.type';

@UntilDestroy()
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListPageComponent implements OnInit {
  private _page = 1;
  private _size = 10;
  private _areAllNewsFetched = false;

  constructor(
    private _newsService: NewsService,
    private _dialog: MatDialog,
    private _storageService: StorageService
  ) {}

  public localNewsArray: News[] = [];

  public newsArray: News[] = [];

  public ngOnInit(): void {
    this.getLocalNews();
    this.getNews();
  }

  public getLocalNews() {
    this.localNewsArray = this._storageService.getItem(StorageType.NEWS);
  }

  public getNews() {
    this._newsService
      .getAllNews(this._page)
      .pipe(untilDestroyed(this))
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

  public createNews() {
    this._dialog
      .open(NewsCreateComponent)
      .afterClosed()
      .pipe(untilDestroyed(this))
      .subscribe((v) => {
        if (v === 'confirm') {
          this.getLocalNews();
        }
      });
  }

  public removeLocalNews() {
    this._storageService.removeNews();
    this.getLocalNews();
  }
}
