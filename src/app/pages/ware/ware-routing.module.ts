import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarePage } from './ware.page';

const routes: Routes = [
  {
    path: '',
    component: WarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarePageRoutingModule {}
