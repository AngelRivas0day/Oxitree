import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootprintPage } from './footprint.page';

const routes: Routes = [
  {
    path: '',
    component: FootprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootprintPageRoutingModule {}
