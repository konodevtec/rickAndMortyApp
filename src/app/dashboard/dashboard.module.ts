import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './service/dashboard.service';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

// import { Ng2SearchPipeModule } from 'ng2-search-filter/src/ng2-filter.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';


import { NavigationPageComponent } from './pages/navigation-page/navigation-page.component';
import { HistoricPageComponent } from './pages/historic-page/historic-page.component';




@NgModule({
  declarations: [
    SearchComponent,
    PaginationComponent,
    SearchPageComponent,
    DetailsPageComponent,
    NavigationPageComponent,
    HistoricPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DashboardService
  ],
})
export class DashboardModule { }
