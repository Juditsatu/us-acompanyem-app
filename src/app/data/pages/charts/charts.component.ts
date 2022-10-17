import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BarriService } from '../../services/barri.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styles: [],
})
export class ChartsComponent implements OnInit {

  constructor( private barriService: BarriService ) {}

  public title1: string = this.barriService.barris[0].nombre
  public title2: string = this.barriService.barris[1].nombre
  public title3: string = this.barriService.barris[2].nombre

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Índex de pobresa',
    'Major de 65 anys',
    'Major de 65 anys que viuen sols',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [
          this.barriService.barris[0].indicePobreza,
          this.barriService.barris[0].mayor65,
          this.barriService.barris[0].soledad65],
        backgroundColor: '#FF5F5D',
        hoverBackgroundColor: '#FF9933',
      },
      {
        data: [
          this.barriService.barris[1].indicePobreza,
          this.barriService.barris[2].mayor65,
          this.barriService.barris[3].soledad65],
        backgroundColor: '#3F7C85',
        hoverBackgroundColor: '#0099DD',
      },
      {
        data: [
          this.barriService.barris[2].indicePobreza,
          this.barriService.barris[2].mayor65,
          this.barriService.barris[2].soledad65],
        backgroundColor: '#00CCBF',
        hoverBackgroundColor: '#00ABBD',
      },
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {}
}
