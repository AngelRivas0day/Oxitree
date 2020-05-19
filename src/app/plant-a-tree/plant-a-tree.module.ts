import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantATreePageRoutingModule } from './plant-a-tree-routing.module';

import { PlantATreePage } from './plant-a-tree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantATreePageRoutingModule
  ],
  declarations: [PlantATreePage]
})
export class PlantATreePageModule {}
