import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListPageComponent } from './pages/news-list/news-list.component';
import { NewsInfoPageComponent } from './pages/news-info/news-info.component';
import { NewsPreviewComponent } from './component/news-preview/news-preview.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatDialogModule } from '@angular/material/dialog';
import { NewsCreateComponent } from './component/news-create/news-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NewsListPageComponent,
    NewsInfoPageComponent,
    NewsPreviewComponent,
    NewsCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    InfiniteScrollModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
