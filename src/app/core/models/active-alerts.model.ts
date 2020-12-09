import {AlertRegions} from './alert-regions.model';
import {AlertAreas} from './alert-areas.model';

/**
 * Created by Luna on 12/1/20.
 */

export class ActiveAlerts {
  total: number;
  land: number;
  marine: number;
  regions: AlertRegions = new AlertRegions();
  areas: AlertAreas = new AlertAreas();
  zones: number;

  constructor(item: ActiveAlerts) {
    Object.assign(this, item);
  }
}
