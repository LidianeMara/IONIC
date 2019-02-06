import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  //create variable to Angular recorganize 
  public nome_user:string = "Lidiane Mara"; 
/* 
nothing 
// create function 
public funcao (nome_user:string, senha:char): void {
alert("Faça Login: ");
}
// view function || this usage for call the function inside the class
ionViewDidload() {
  this.funcao("Lidiane Mara","senha123");
}
*/

}

