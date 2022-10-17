import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'home', component: HomeComponent},
      { path:'chart', component: ChartsComponent },
      { path:'map', component:MapComponent },
      { path:'**', redirectTo:'home'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
