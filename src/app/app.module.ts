import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListPageComponent } from './pages/news-list/news-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NewsPreviewComponent } from './component/news-preview/news-preview.component';
@NgModule({
  declarations: [AppComponent, NewsListPageComponent, NewsPreviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
