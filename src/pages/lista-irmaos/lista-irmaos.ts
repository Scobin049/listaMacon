import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LojaProvider } from '../../providers/loja/loja';

/**
 * Generated class for the ListaIrmaosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-irmaos',
  templateUrl: 'lista-irmaos.html',
})
export class ListaIrmaosPage {
  public lista_irmaos = new Array<any>(); 
  public loja_nome;

  public loader;
  public refresher;
  public isRefreshing:Boolean = false; 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public lojaProvider: LojaProvider) {
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

  carregaIrmaos(newpage:Boolean = false){
    this.loja_nome = this.navParams.data.nome;
    this.abreLoader();  
    this.lista_irmaos = this.lojaProvider.getIrmaos(this.navParams.data.id);
    console.log(this.lista_irmaos);
    
    this.fechaLoader();
    if(this.isRefreshing){
      this.refresher.complete();
      this.isRefreshing = false;
    }    
  }

  ionViewDidLoad() {    
    this.carregaIrmaos();
  }

}
