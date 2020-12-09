import {Component, OnInit} from '@angular/core';

// Given more time, I would put this into the components folder which is where I should have to begin with

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
