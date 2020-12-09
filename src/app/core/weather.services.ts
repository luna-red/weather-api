import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AlertType } from './models/alert-type.model';
import { ActiveAlerts } from './models/active-alerts.model';
import { Observable } from 'rxjs';
import { AreaAlerts } from './models/area-alerts.model';

@Injectable({ providedIn: 'root' })

export class WeatherServices {
    activeAlerts: ActiveAlerts;
    private areaAlert: Array<AreaAlerts>;

    constructor(
        private http: HttpClient) {
    }

    protected getEvents(data: any): any {
      return data.eventTypes;
    }

    public getAlertTypes(): Observable<AlertType[]> {
        const url = `${environment.api_weather_endpoint}/types`;

        return this.http.get<any>(url)
            .pipe(map(data => {
                return this.getEvents(data).map(x => {
                    return new AlertType({ name: x });
                });
            }));
    }

    public getActiveAlert(): Observable<ActiveAlerts> {
      const url = `${environment.api_weather_endpoint}/active/count`;

      return this.http.get<any>(url)
        .pipe(map(data => {
          this.activeAlerts = new ActiveAlerts(data);
          return this.activeAlerts;
        }));
    }

    public getAreaAlert(area): Observable<any> {
      const url = `${environment.api_weather_endpoint}/active/area/${area}`;
      if (!this.areaAlert) { this.areaAlert = []; }
      return this.http.get<any>(url)
        .pipe(map(res => {
          this.areaAlert[area] = res;
          return this.areaAlert[area];
        }));
    }

    public fetchAreaAlert = () => {
      return this.areaAlert;
    }
}

