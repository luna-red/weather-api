import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WeatherServices } from '../../weather.services';
import { AreaAlerts } from '../../models/area-alerts.model';

@Component({
  selector: 'app-area-description',
  templateUrl: './area-description.component.html',
  styleUrls: ['./area-description.component.scss']
})

export class AreaDescriptionComponent implements OnInit {
  geoCodes: Params;
  areaAlerts: AreaAlerts;
  areaDescription: any;

  constructor(private route: ActivatedRoute, private weatherService: WeatherServices) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.geoCodes = params;
      this.resolveAreas();
    });
  }

  resolveAreas = () => {
    this.areaAlerts = this.weatherService.fetchAreaAlert()[this.geoCodes[0]];
    this.areaDescription = this.areaAlerts.features[this.geoCodes[1]];
  }

}
