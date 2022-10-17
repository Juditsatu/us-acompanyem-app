import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarriService {



  constructor() { }

  barris = [
    {
        "id": "01",
        "nombre": "el Raval",
        "indicePobreza": 56.64,
        "mayor65": 31.9,
        "soledad65": 11.3,
        "lat": 41.378616670551004,
        "lon": 2.17027931537028,
        "coordParser": null
    },
    {
        "id": "02",
        "nombre": "el Barri Gòtic",
        "indicePobreza": 103.91,
        "mayor65": 30.2,
        "soledad65": 10.1,
        "lat": 41.380192533716894,
        "lon": 2.178260873563744,
        "coordParser": null
    },
    {
        "id": "03",
        "nombre": "la Barceloneta",
        "indicePobreza": 71.16,
        "mayor65": 32.8,
        "soledad65": 17.0,
        "lat": 41.38171459693941,
        "lon": 2.190970912313538,
        "coordParser": null
    },
    {
        "id": "04",
        "nombre": "Sant Pere Santa Caterina i la Ribera",
        "indicePobreza": 123.14,
        "mayor65": 33.6,
        "soledad65": 13.6,
        "lat": 41.38648931950222,
        "lon": 2.183164045587248,
        "coordParser": null
    },
    {
        "id": "05",
        "nombre": "el Fort Pienc",
        "indicePobreza": 129.74,
        "mayor65": 25.3,
        "soledad65": 20.8,
        "lat": 41.39797777511194,
        "lon": 2.1814950798648884,
        "coordParser": null
    },
    {
        "id": "06",
        "nombre": "la Sagrada Família",
        "indicePobreza": 120.99,
        "mayor65": 27.5,
        "soledad65": 22.2,
        "lat": 41.40618603414744,
        "lon": 2.177749863155455,
        "coordParser": null
    },
    {
        "id": "07",
        "nombre": "la Dreta de l'Eixample",
        "indicePobreza": 281.88,
        "mayor65": 27.1,
        "soledad65": 21.3,
        "lat": 41.39492224242086,
        "lon": 2.1695918450842724,
        "coordParser": null
    },
    {
        "id": "08",
        "nombre": "l'Antiga Esquerra de l'Eixample",
        "indicePobreza": 206.36,
        "mayor65": 29.0,
        "soledad65": 20.8,
        "lat": 41.38829053677488,
        "lon": 2.154081310549832,
        "coordParser": null
    },
    {
        "id": "09",
        "nombre": "la Nova Esquerra de l'Eixample",
        "indicePobreza": 148.97,
        "mayor65": 26.8,
        "soledad65": 23.4,
        "lat": 41.38368556407797,
        "lon": 2.1498560104206477,
        "coordParser": null
    },
    {
        "id": "10",
        "nombre": "Sant Antoni",
        "indicePobreza": 121.6,
        "mayor65": 28.5,
        "soledad65": 22.0,
        "lat": 41.378480153353024,
        "lon": 2.159558164067645,
        "coordParser": null
    },
    {
        "id": "11",
        "nombre": "el Poble-sec",
        "indicePobreza": 72.13,
        "mayor65": 28.6,
        "soledad65": 16.6,
        "lat": 41.37076459040775,
        "lon": 2.161990788660895,
        "coordParser": null
    },
    {
        "id": "12",
        "nombre": "la Marina del Prat Vermell",
        "indicePobreza": 9.01,
        "mayor65": 31.5,
        "soledad65": 18.1,
        "lat": 41.339081870269446,
        "lon": 2.1418444618120467,
        "coordParser": null
    },
    {
        "id": "13",
        "nombre": "la Marina de Port",
        "indicePobreza": 34.57,
        "mayor65": 25.4,
        "soledad65": 19.9,
        "lat": 41.359283575214256,
        "lon": 2.1385650013092232,
        "coordParser": null
    },
    {
        "id": "14",
        "nombre": "la Font de la Guatlla",
        "indicePobreza": 78.49,
        "mayor65": 24.9,
        "soledad65": 23.5,
        "lat": 41.370363935715574,
        "lon": 2.146812019811577,
        "coordParser": null
    },
    {
        "id": "15",
        "nombre": "Hostafrancs",
        "indicePobreza": 99.51,
        "mayor65": 24.7,
        "soledad65": 19.2,
        "lat": 41.37466586905306,
        "lon": 2.1446452920955603,
        "coordParser": null
    },
    {
        "id": "17",
        "nombre": "Sants - Badal",
        "indicePobreza": 68.93,
        "mayor65": 23.7,
        "soledad65": 22.0,
        "lat": 41.374819419436776,
        "lon": 2.1269818322281573,
        "coordParser": null
    },
    {
        "id": "18",
        "nombre": "Sants",
        "indicePobreza": 99.74,
        "mayor65": 26.9,
        "soledad65": 20.1,
        "lat": 41.37809467337245,
        "lon": 2.13558838159377,
        "coordParser": null
    },
    {
        "id": "19",
        "nombre": "les Corts",
        "indicePobreza": 162.66,
        "mayor65": 23.7,
        "soledad65": 26.3,
        "lat": 41.387432420097944,
        "lon": 2.1341132999975954,
        "coordParser": null
    },
    {
        "id": "20",
        "nombre": "la Maternitat i Sant Ramon",
        "indicePobreza": 139.09,
        "mayor65": 22.8,
        "soledad65": 26.7,
        "lat": 41.38426778189383,
        "lon": 2.120702549646012,
        "coordParser": null
    },
    {
        "id": "21",
        "nombre": "Pedralbes",
        "indicePobreza": 401.65,
        "mayor65": 20.8,
        "soledad65": 24.8,
        "lat": 41.394850249204126,
        "lon": 2.1057240059073274,
        "coordParser": null
    },
    {
        "id": "22",
        "nombre": "Vallvidrera el Tibidabo i les Planes",
        "indicePobreza": 190.24,
        "mayor65": 20.2,
        "soledad65": 15.2,
        "lat": 41.42118881938758,
        "lon": 2.088962074031066,
        "coordParser": null
    },
    {
        "id": "23",
        "nombre": "Sarrià",
        "indicePobreza": 307.53,
        "mayor65": 21.3,
        "soledad65": 21.6,
        "lat": 41.403805153323006,
        "lon": 2.11422405949967,
        "coordParser": null
    },
    {
        "id": "24",
        "nombre": "les Tres Torres",
        "indicePobreza": 354.87,
        "mayor65": 21.0,
        "soledad65": 21.5,
        "lat": 41.39839486471326,
        "lon": 2.1310646423790636,
        "coordParser": null
    },
    {
        "id": "25",
        "nombre": "Sant Gervasi - la Bonanova",
        "indicePobreza": 291.48,
        "mayor65": 23.5,
        "soledad65": 21.9,
        "lat": 41.41033693664879,
        "lon": 2.1301313937379462,
        "coordParser": null
    },
    {
        "id": "26",
        "nombre": "Sant Gervasi - Galvany",
        "indicePobreza": 312.8,
        "mayor65": 27.4,
        "soledad65": 22.1,
        "lat": 41.39688182534131,
        "lon": 2.1433048070578637,
        "coordParser": null
    },
    {
        "id": "27",
        "nombre": "el Putxet i el Farró",
        "indicePobreza": 225.83,
        "mayor65": 28.1,
        "soledad65": 21.1,
        "lat": 41.40698845054022,
        "lon": 2.143225952900323,
        "coordParser": null
    },
    {
        "id": "28",
        "nombre": "Vallcarca i els Penitents",
        "indicePobreza": 141.96,
        "mayor65": 25.8,
        "soledad65": 22.6,
        "lat": 41.41622487851363,
        "lon": 2.140935990820676,
        "coordParser": null
    }
]




}
