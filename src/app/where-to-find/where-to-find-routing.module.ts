import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhereToFindPage } from './where-to-find.page';

const routes: Routes = [
  {
    path: '',
    component: WhereToFindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhereToFindPageRoutingModule {}
