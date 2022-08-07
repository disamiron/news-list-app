import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListPageComponent } from './pages/news-list/news-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [AppComponent, NewsListPageComponent],
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
