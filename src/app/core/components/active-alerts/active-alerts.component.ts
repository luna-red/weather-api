import {Component, OnInit} from '@angular/core';
import { WeatherServices } from '../../weather.services';
import { AlertAreas } from '../../models/alert-areas.model';
import { Router } from '@angular/router';

// Given more time, I would put this into the components folder which is where I should have to begin with

@Component({
  selector: 'app-active-alerts',
  templateUrl: './active-alerts.component.html',
  styleUrls: ['./active-alerts.component.scss']
})

export class ActiveAlertsComponent implements OnInit {
  activeAlerts: AlertAreas;
  areaAlert: Record<string, any>;
  errorAlert: Record<string, any>;

  constructor(private weatherServices: WeatherServices, private router: Router) { }

  ngOnInit() {
    this.getAlerts();
    this.areaAlert = {};
    this.errorAlert = {};
  }

  getAlerts = () => {
    this.weatherServices.getActiveAlert().subscribe(res => {
      this.activeAlerts = res.areas;
    });
  }

  getAreaAlert = (areaCode) => {
    if (!this.areaAlert[areaCode]) {
      this.weatherServices.getAreaAlert(areaCode).subscribe(
        res => { this.areaAlert[areaCode] = res; },
        error => { this.errorAlert[areaCode] = error; });
    }
  }

  routeToDescription = (keyvalue, stateAbr) => {
    this.router.navigate(['/area-desc'], { queryParams: [ stateAbr, keyvalue ] });
  }
}
