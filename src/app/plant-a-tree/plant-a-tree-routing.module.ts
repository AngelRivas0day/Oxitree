import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantATreePage } from './plant-a-tree.page';

const routes: Routes = [
  {
    path: '',
    component: PlantATreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantATreePageRoutingModule {}
