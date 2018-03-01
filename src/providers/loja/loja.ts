import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LojaProvider {
  private base_api = "maconaria_api/";
  
  constructor(public http: HttpClient) {}
  
  getLojas(page = 1){
    return [
      {
        loja_id: '1',
        loja_nome: 'Teste',
        loja_endereco: 'Rua dos testes, 80 - Centro - Dracena/SP',
        loja_telefone: '(18) 3822-0000'
      },
      {
        loja_id: '2',
        loja_nome: 'Teste 2',
        loja_endereco: 'Avenida da validação, 33 - Centro - Adamantina/SP',
        loja_telefone: '(18) 3542-2323'
      },
      {
        loja_id: '3',
        loja_nome: 'Fraternidade e união',
        loja_endereco: 'Avenida presidente vargas, 88 - Centro - Presidente Prudente/SP',
        loja_telefone: '(18) 3788-1254'
      }
    ];
    //return this.http.get(this.base_api +"lojas");
  }
  
  getLoja(id){
    console.log(id);
    return {
      loja_id: '1',
      loja_nome: 'Teste',
      loja_endereco: 'Rua dos testes, 80 - Centro - Dracena/SP',
      loja_telefone: '(18) 3822-0000',
      loja_irmaos: 35,
      loja_historia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
    ;
    //return this.http.get(this.base_api +"loja/"+id);
  }
  
  getIrmaos(idloja){
    console.log(idloja);
    return [
      {
        irmaos_id : 1,
        irmaos_nome : "Paulo Diniz",
      }
    ];
    //return this.http.get(this.base_api +"irmaos/");
  }
  
  getIrmao(id){
    console.log(id);
    return {
      loja_id: '1',
      loja_nome: 'Teste',
      loja_endereco: 'Rua dos testes, 80 - Centro - Dracena/SP',
      loja_telefone: '(18) 3822-0000',
      loja_irmaos: 35,
      loja_historia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
    ;
    //return this.http.get(this.base_api +"irmao/"+id);
  }
}