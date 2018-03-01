import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { DetalhesLojaPageModule } from '../pages/detalhes-loja/detalhes-loja.module';
import { ListaIrmaosPageModule } from '../pages/lista-irmaos/lista-irmaos.module';
import { DetalhesIrmaoPageModule } from '../pages/detalhes-irmao/detalhes-irmao.module';
import { ConfigPageModule } from '../pages/config/config.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { LojaProvider } from '../providers/loja/loja';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http' 

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PerfilPageModule,
    DetalhesLojaPageModule,
    ListaIrmaosPageModule,
    DetalhesIrmaoPageModule,
    SobrePageModule,
    ConfigPageModule,
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LojaProvider
  ]
})
export class AppModule {}
