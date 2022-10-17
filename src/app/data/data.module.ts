import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    DataRoutingModule
  ]
})
export class DataModule { }
