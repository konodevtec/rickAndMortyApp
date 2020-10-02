import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-historic-page',
  templateUrl: './historic-page.component.html',
  styleUrls: ['./historic-page.component.scss']
})
export class HistoricPageComponent implements OnInit {

  rickId = 0;
  loading: boolean;
  rick;
  
  constructor(
    private activeRoute: ActivatedRoute,
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    const rickId = this.activeRoute.snapshot.paramMap.get('id');

    this.rickId = Number(rickId);
    this.getRick(this.rickId);

  }

  getRick(id: number): void {
    this.loading = true;

    this.dashboardService.getRick(id).subscribe(
      response => {
        console.log(response);
        this.rick = response;
      }
    );
  }
}
