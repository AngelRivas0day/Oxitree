import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant-a-tree',
  templateUrl: './plant-a-tree.page.html',
  styleUrls: ['./plant-a-tree.page.scss'],
})
export class PlantATreePage implements OnInit {

  steps: number = 4;
  actualStep: number = 1;
  currentTree: any;
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
      name: 'Jacaranda',
      fullName: 'Jacaranda Lorem',
      rate: '3 / 4'
    },
    {
      id: 2,
      src: '../assets/images/jacarandas.jpg',
      name: 'Jacaranda',
      fullName: 'Jacaranda Lorem',
      rate: '3 / 4'
    },
    {
      id: 3,
      src: '../assets/images/jacarandas.jpg',
      name: 'Jacaranda',
      fullName: 'Jacaranda Lorem',
      rate: '3 / 4'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.actualStep = 1;
  }

  nextStep(){
    this.actualStep += 1;
  }

  stepBack(){
    if(this.actualStep > 1){
      this.actualStep -= 1;
    }
  }

  openTree(tree:any){
    this.currentTree = tree;
    this.nextStep();
  }

}
