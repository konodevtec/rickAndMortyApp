import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/http.service';
import { RickModel } from "./../models/rickModel";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpService,
    private activeRoute: ActivatedRoute,
  ) { }

  getListRicks(): Observable<any> {
    return this.http.get<any>(`/ricks`);
  }

  getRick(id) {
    return this.http.get(`/ricks/${id}`);
  }

  addNavigation(ricks: RickModel[], id): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');

    return this.http.put(`/ricks/${id}`, ricks, headers);
  }
}
