import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.component.html',
  styles: [
    `
    div {
      width: 100%;
      height: 100vh;
      margin: 0px;
    }
    `
  ]
})
export class MapLocationComponent implements AfterViewInit {

  @Input() lon: number = 0;
  @Input() lat: number = 0;
  @ViewChild('map') divMap!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lon, this.lat],
      zoom: 15,
      interactive: false
    });

    new mapboxgl.Marker({
      'color': '#FF0000'
    })
      .setLngLat([this.lon, this.lat])
      .addTo(map)
  }

  addColor() {
    const color = "#FF0000";
  }

}
