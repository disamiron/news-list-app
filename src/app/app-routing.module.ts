import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListPageComponent } from './pages/news-list/news-list.component';

const routes: Routes = [
  {
    path: '',
    component: NewsListPageComponent,
  },
  // {
  //   path: ':url',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
