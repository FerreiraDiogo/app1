import { Component, OnInit, Input } from '@angular/core';
import Coracao from "../shared/coracao.model"

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  @Input() public tentativas: number;
  private coracoes: Array<Coracao> = [];

  constructor() {
    this.geraCoracoes()
  }

  ngOnInit() {
    console.log(this.tentativas)

  }



  public geraCoracoes(): void {
    for (let i = 0; i < this.tentativas; i++) {
      this.coracoes.push(new Coracao(true));
    }
  }

  public retornaCoracoes(): Array<Coracao> {
    return this.coracoes;
  }

}
