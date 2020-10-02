import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPageComponent } from './dashboard/pages/details-page/details-page.component';
import { HistoricPageComponent } from './dashboard/pages/historic-page/historic-page.component';
import { SearchPageComponent } from './dashboard/pages/search-page/search-page.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent
  },
  {
    path: ':id',
    component: DetailsPageComponent
  },
  {
    path: ':id/historic',
    component: HistoricPageComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
