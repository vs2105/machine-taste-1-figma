import { Component, OnInit } from '@angular/core';
import { userDetails } from '../../const/allArray';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  useroverview=userDetails
  constructor() { }

  ngOnInit(): void {
  }

}
