import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  loggedIn$: Observable<any>;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loggedIn$ = this.apiService._auth;
  }

}
