import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesIrmaoPage } from './detalhes-irmao';

@NgModule({
  declarations: [
    DetalhesIrmaoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesIrmaoPage),
  ],
})
export class DetalhesIrmaoPageModule {}
