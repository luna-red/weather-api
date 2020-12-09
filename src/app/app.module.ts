import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';

// Services
import { WeatherServices } from './core/weather.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { ActiveAlertsComponent } from './core/components/active-alerts/active-alerts.component';
import { AreaDescriptionComponent } from './core/components/area-description/area-description.component';
import { AlertTypeComponent } from './core/components/alert-type/alert-type.component';
import { DefaultRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ActiveAlertsComponent,
    AreaDescriptionComponent,
    AlertTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(DefaultRoutes),
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [
    WeatherServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
