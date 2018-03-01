import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesLojaPage } from './detalhes-loja';

@NgModule({
  declarations: [
    DetalhesLojaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesLojaPage),
  ],
})
export class DetalhesLojaPageModule {}
