import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { DataRoutingModule } from './data-routing.module';
import { MapComponent } from './pages/map/map.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    MapComponent,
    ChartsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
    NgChartsModule
  ]
})
export class DataModule { }
