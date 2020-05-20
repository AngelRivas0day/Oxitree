import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ProvApiService } from '../shared/services/prov-api.service';

@Component({
  selector: 'app-plant-a-tree',
  templateUrl: './plant-a-tree.page.html',
  styleUrls: ['./plant-a-tree.page.scss'],
})
export class PlantATreePage implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  next(){
    if(this.currentTreeIndex < this.trees.length-1){
      this.slides.slideNext();
      this.currentTreeIndex += 1;
      this.currentTree = this.trees[this.currentTreeIndex];
    }
  }

  prev(){
    if(this.currentTreeIndex > 0){
      this.slides.slidePrev();
      this.currentTreeIndex -= 1;
      this.currentTree = this.trees[this.currentTreeIndex];
    }
  }

  currentTreeIndex: number = 0;

  steps: any[] = [
    {
      id: 1,
      name: 'Rellena los datos'
    },
    {
      id: 2,
      name: 'Selecciona un arbol'
    },
    {
      id: 3,
      name: 'Detalles'
    },
    {
      id: 4,
      name: 'Manos a la obra'
    }
  ];
  actualStep: any;
  actualStepIndex: number = 1;
  currentTree: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  sizes: any[];

  states: any[];

  regions: any[];

  trees: any[];

  constructor(
    private apiService: ProvApiService
  ) {
    this.actualStep = this.steps[this.actualStepIndex-1];
    this.sizes = this.apiService.sizes;
    this.states = this.apiService.states;
    this.regions = this.apiService.regions;
    this.trees = this.apiService.trees;
   }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.actualStepIndex = 1;
    this.actualStep = this.steps[this.actualStepIndex-1];
    this.currentTreeIndex = 0;
  }

  nextStep(){
    this.actualStepIndex += 1;
    this.actualStep = this.steps[this.actualStepIndex-1];
  }

  stepBack(){
    if(this.actualStepIndex > 0){
      this.actualStepIndex -= 1;
      this.actualStep = this.steps[this.actualStepIndex-1];
    }
  }

  setTree(){
    this.currentTree = this.trees[0];
    this.nextStep();
  }

  openTree(tree:any){
    this.currentTree = tree;
    this.nextStep();
  }

  onSubmit(){
    
  }

}
