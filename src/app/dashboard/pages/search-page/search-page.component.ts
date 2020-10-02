import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  
  ricks: any;


  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getListRicks();
  }

  getListRicks() {
    this.dashboardService.getListRicks().subscribe(
      response => {
        this.ricks = response
        console.log(this.ricks);
        this.ricks.sort(function (a, b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
      }
    );
  }
}
