import { Component } from '@angular/core';

interface Property {
  title: string;
  desc: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: [
    `
    #map {
      height: 100%;
      width: 100%;
    }
    `
  ]
})
export class MapComponent {

  constructor() { }
  

  infoLocation: Property[] = [
    {
      title: 'Casa residencial, Canadá',
      desc: 'Bella propiedad en Katana, Canadá',
      lngLat: [ -75.92722289474008, 45.280015511264466]
    },
    {
      title: 'Casa de playa, México',
      desc: 'Hermosa casa de playa en Acapulco, México',
      lngLat: [ -99.91287720907991, 16.828940930185748]
    }
  ]

}
