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
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';


import { FlexLayoutModule } from '@angular/flex-layout';
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
    FlexLayoutModule,
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
