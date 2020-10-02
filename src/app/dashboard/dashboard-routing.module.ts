import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

export const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})

export class DashboardRoutingModule {}
