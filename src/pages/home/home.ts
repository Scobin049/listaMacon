import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { DetalhesLojaPage } from '../detalhes-loja/detalhes-loja';
import { LojaProvider } from '../../providers/loja/loja';
import { ListaIrmaosPage } from '../lista-irmaos/lista-irmaos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LojaProvider]
})


export class HomePage {
  public lista_lojas = new Array<any>(); 
  public loja_filtro;
  
  public loader;
  public refresher;
  public isRefreshing:Boolean = false; 
  
  public page = 1;
  public infiniteScroll; 
  
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    private lojaProvider: LojaProvider
  ) {
    
  }
  
  busca_irmaos(id, nome){
    this.navCtrl.push(ListaIrmaosPage,{id : id, nome : nome});
  }
  
  busca_detalhes(id){
    this.navCtrl.push(DetalhesLojaPage,{id : id});
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
  
  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregaLojas();
  }
  
  doInfinite(infiniteScroll) {
    this.page ++;
    this.infiniteScroll = infiniteScroll;
    this.carregaLojas(true);
  }
  
  initializeItems(){
    this.carregaLojas();
  }
  
  buscaLojas(ev: any){   
    let val = ev.target.value;
    
    this.initializeItems();
    
    if (val && val.trim() != '') {
      this.lista_lojas = this.lista_lojas.filter((item) => {
        return (item.loja_nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }   
  }
  
  carregaLojas(newpage:Boolean = false){
    this.abreLoader();  
    this.lista_lojas = this.lojaProvider.getLojas(this.page);
    
    this.fechaLoader();
    if(this.isRefreshing){
      this.refresher.complete();
      this.isRefreshing = false;
    }    
  }
  
  /*---(newpage:Boolean = false){
    this.abreLoader();  
    this.lojaProvider.getLojas(this.page).subscribe(
      data => { 
        const obj_retorno = (data as any);
        console.log(obj_retorno);
        
        
        if(newpage){
          this.lista_lojas = this.lista_lojas.concat(obj_retorno.results);
          this.infiniteScroll.complete();
        }
        else{
          this.lista_lojas = obj_retorno.results;
        }
        
        this.fechaLoader();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      },
      error =>{
        console.log(error);
        this.fechaLoader();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    );
  } */
  
  
  
  ionViewDidLoad() {
    this.page = 1;
    this.carregaLojas();   
  }
}
