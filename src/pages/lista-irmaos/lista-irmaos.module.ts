import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaIrmaosPage } from './lista-irmaos';

@NgModule({
  declarations: [
    ListaIrmaosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaIrmaosPage),
  ],
})
export class ListaIrmaosPageModule {}
