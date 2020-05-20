import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvApiService {

  sizes: any[] = [
    {
      name: "Muy Chico",
      mts: "5.6"
    },
    {
      name: "Chico",
      mts: "5.6"
    },
    {
      name: "Mediano",
      mts: "5.6"
    },
    {
      name: "Grande",
      mts: "5.6"
    },
    {
      name: "Muy Grande",
      mts: "5.6"
    }
  ];

  states: any[] = [
    {
      name: "Jalisco"
    },
    {
      name: "Rio Grande du Sol - BR"
    }
  ];

  regions: any[] = [
    {
      name: "Centro",
      climates: [
        {
          name: "test",
          degress: "35"
        }
      ]
    },
    {
      name: "Altos Norte",
      climates: [
        {
          name: "test",
          degress: "35"
        }
      ]
    },
    {
      name: "Altos Sur",
      climates: [
        {
          name: "test",
          degress: "35"
        }
      ]
    },
    {
      name: "Costa Sur",
      climates: [
        {
          name: "test",
          degress: "35"
        }
      ]
    },
    {
      name: "Lagunas",
      climates: [
        {
          name: "test",
          degress: "35"
        }
      ]
    },
    {
      name: "Norte",
      climates: [
        {
          name: "test",
          degress: "35"
        }
      ]
    },
    {
      name: "Sierra de Amula",
      climates: [
        {
          name: "test",
          degress: "35"
        }
      ]
    },
    {
      name: "Sierra Occidental",
      climates: [
        {
          name: "test",
          degress: "35"
        }
      ]
    },
    {
      name: "Sur",
      climates: [
        {
          name: "test",
          degress: "35"
        }
      ]
    },
    {
      name: "Sureste",
      climates: [
        {
          name: "test",
          degress: "35"
        }
      ]
    },
    {
      name: "Valles",
      climates: [
        {
          name: "test",
          degress: "35"
        }
      ]
    }
  ];

  trees: any[] = [
    {
      id: 1,
      src: '../assets/images/jacarandas.jpg',
      name: 'Arbol 1',
      fullName: 'Jacaranda 1',
      rate: '3 / 4'
    },
    {
      id: 2,
      src: '../assets/images/jacaranda.jpg',
      name: 'Arbol 2',
      fullName: 'Jacaranda 2',
      rate: '3 / 4'
    },
    {
      id: 3,
      src: '../assets/images/jacarandas.jpg',
      name: 'Arbol 3',
      fullName: 'Jacaranda 3',
      rate: '3 / 4'
    },
  ];

  constructor() { }
}
