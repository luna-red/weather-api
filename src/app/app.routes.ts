/**
 * Created by Luna on 12/1/20.
 */
import { Routes } from '@angular/router';
import { AreaDescriptionComponent } from './core/components/area-description/area-description.component';
import {DashboardComponent} from './core/components/dashboard/dashboard.component';

export const DefaultRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'area-desc',
    component: AreaDescriptionComponent
  }
];
