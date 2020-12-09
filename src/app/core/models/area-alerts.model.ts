/**
 * Created by Luna on 12/1/20.
 */
export class AreaAlerts {
  features: Array<any>;
  title: any;
  type: any;
  updated: any;

  constructor(item: any) {
    Object.assign(this, item);
  }
}
