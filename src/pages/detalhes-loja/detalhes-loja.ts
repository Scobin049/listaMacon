import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LojaProvider } from '../../providers/loja/loja';

@IonicPage()
@Component({
  selector: 'page-detalhes-loja',
  templateUrl: 'detalhes-loja.html',
})
export class DetalhesLojaPage {
  public loja;
  public loader;
  public refresher;
  public isRefreshing:Boolean = false; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public lojaProvider: LojaProvider) {
  }
  
  abreLoader() {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    this.loader.present();
  }    
  fechaLoader() {      
    this.loader.dismiss();
  }
  
  carregaLoja(newpage:Boolean = false){
    this.abreLoader();  
    this.loja = this.lojaProvider.getLoja(this.navParams.data.id);
    console.log(this.loja);
    
    this.fechaLoader();
    if(this.isRefreshing){
      this.refresher.complete();
      this.isRefreshing = false;
    }    
  }
  
  ionViewDidLoad() {
    this.carregaLoja();
    
  }
  
}
