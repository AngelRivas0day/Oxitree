import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ProvApiService } from '../shared/services/prov-api.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../shared/services/api/api.service';
import data from "src/assets/data.json";
import treeSizes from "src/assets/sizes.json";

@Component({
  selector: 'app-plant-a-tree',
  templateUrl: './plant-a-tree.page.html',
  styleUrls: ['./plant-a-tree.page.scss'],
})
export class PlantATreePage implements OnInit {

  @ViewChild('slides') slides: IonSlides;
  form: FormGroup;

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

  states: any[] = [];
  currentState: any;

  regions: any[] = [];
  currentregion: any;

  trees: any[];

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.actualStep = this.steps[this.actualStepIndex-1];
    this.form = this.formBuilder.group({
      state: new FormControl('', [Validators.required]),
      region: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      climate: new FormControl('')
    });
   }

  ngOnInit() {
    this.fetchData();
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

  // *************************
  //  
  // event handlers
  //
  // *************************

  onSubmit(){
    this.apiService.getCustomTrees('trees/list', this.form.value).subscribe((data:any)=>{
      console.log(data);
      this.trees = data;
    },err=>console.log(err),
    ()=>this.setTree());
    // this.setTree();
  }

  handleStateChange(e){
    this.regions = Object.keys(data[e.detail.value].regions);
    this.currentState = e.detail.value;
  }

  handleRegionChange(e){
    console.log(data[this.currentState].regions[e.detail.value].clima);
    this.currentregion = e.detail.value;
    this.form.get('climate').setValue(data[this.currentState].regions[e.detail.value].clima);
  }

  // *************************
  //  
  // data fetch
  //
  // *************************

  fetchData(){
    // Fetch states and regions data
    this.states = Object.keys(data);
    // Fetch tree sizes
    this.sizes = treeSizes;
  }
}
