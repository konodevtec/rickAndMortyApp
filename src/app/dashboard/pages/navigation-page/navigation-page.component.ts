import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup,Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-navigation-page',
  templateUrl: './navigation-page.component.html',
  styleUrls: ['./navigation-page.component.scss']
})
export class NavigationPageComponent implements OnInit {

  rickId = 0;
  loading: boolean;
  rick;
  navigation: string;
  navigationForm: UntypedFormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private dashboardService: DashboardService,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: UntypedFormBuilder,

  ) { }

  ngOnInit(): void {

    this.rickId = Number(this.data.rickId);
    this.getRick(this.rickId);

    this.navigationForm = this.formBuilder.group({
      navigationName: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  getRick(id: number): void {
    this.loading = true;

    this.dashboardService.getRick(id).subscribe(
      response => {
        this.rick = response;
      }
    );
  }
  sendNavigation() {
    this.navigation = this.navigationForm.controls['navigationName'].value;
    this.rick.navigation.push(this.navigation);
    console.log(this.rick);

    this.dashboardService.addNavigation(this.rick, this.rickId).subscribe(
      response => {
        console.log(response);
      });
  }
}
