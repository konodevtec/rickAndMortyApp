import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../service/dashboard.service';
import { NavigationPageComponent } from '../navigation-page/navigation-page.component';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})

export class DetailsPageComponent implements OnInit {


  rickId = 0;
  loading: boolean;
  rick;

  constructor(
    private activeRoute: ActivatedRoute,
    private dashboardService: DashboardService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const rickId = this.activeRoute.snapshot.paramMap.get('id');

    this.rickId = Number(rickId);
    this.getRick(this.rickId);

  }
  openDialog() {
    this.dialog.open(NavigationPageComponent, {
      data: {
        rickId: this.rickId
      }
    });
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
