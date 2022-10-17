import { Component } from '@angular/core';

interface Property {
  id: string;
  nombre: string;
  indicePobreza: number;
  mayor65: number;
  soledad65: number;
  lat: number;
  lon: number;
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
  

//   {
//     "id": "B-01",
//     "nombre": "el Raval",
//     "indicePobreza": 56.64,
//     "mayor65": 31.9,
//     "soledad65": 11.3,
//     "lat": 41.378616670551004,
//     "lon": 2.17027931537028,
//     "coordParser": null
// }

  infoLocation: Property[] = [
    {
      id: "B-01",
      nombre: "el Raval",
      indicePobreza: 56.64,
      mayor65: 31.9,
      soledad65: 11.3,
      lat: 41.378616670551004,
      lon: 2.17027931537028
    }
  ]

}
