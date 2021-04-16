import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratosanterioresPageRoutingModule } from './contratosanteriores-routing.module';

import { ContratosanterioresPage } from './contratosanteriores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratosanterioresPageRoutingModule
  ],
  declarations: [ContratosanterioresPage]
})
export class ContratosanterioresPageModule {}
