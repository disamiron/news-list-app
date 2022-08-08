import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsInfoPageComponent } from './pages/news-info/news-info.component';
import { NewsListPageComponent } from './pages/news-list/news-list.component';

const routes: Routes = [
  {
    path: 'news-list-app',
    component: NewsListPageComponent,
  },
  {
    path: 'news-list-app/avto-novosti/:url',
    component: NewsInfoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
