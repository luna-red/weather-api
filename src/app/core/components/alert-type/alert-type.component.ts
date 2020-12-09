import { Component, OnInit } from '@angular/core';
import { AlertType } from '../../models/alert-type.model';
import { WeatherServices } from '../../weather.services';

@Component({
  selector: 'app-alert-type',
  templateUrl: './alert-type.component.html',
  styleUrls: ['./alert-type.component.scss']
})
export class AlertTypeComponent implements OnInit {
  alertTypes: AlertType[];
  title = 'interview-app';

  constructor(
    private weatherServices: WeatherServices) {
  }

  public ngOnInit() {
    this.weatherServices.getAlertTypes().subscribe(res => {
      this.alertTypes = res;
    });
  }

}
