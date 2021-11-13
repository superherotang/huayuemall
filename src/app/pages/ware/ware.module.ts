import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarePageRoutingModule } from './ware-routing.module';

import { WarePage } from './ware.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarePageRoutingModule
  ],
  declarations: [WarePage]
})
export class WarePageModule {}
