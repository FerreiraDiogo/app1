import { Component, OnInit, Input } from '@angular/core';
import Frase from "../shared/frase.model"
import { FRASES } from "./frases-mock"
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: String = "Traduza a frase";
  private resposta: String = "";
  public rodada: number = 0;
  private rodadaFrase: Frase;
  public progresso: number = 0;
  public tentativas: number = 3

  constructor() {
    console.log(this.tentativas)
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  retornaFrase(): String {
    return this.rodadaFrase.fraseEng;
  }

  retornaResposta(): String {
    return this.resposta;
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  verificaResposta(): void {
    console.log(this.tentativas);
    if (this.rodadaFrase.frasePt.toLowerCase() == this.resposta.toLowerCase()) {
      console.log("resposta certa");
      this.trocaFrase();
      this.atualizaRodada();
      this.progresso += (100 / FRASES.length);
    } else {
      this.tentativas--;
      if (this.tentativas == 0) {
        alert("fim de jogo!")
      }
      console.log("Resposta errada");
    }
    console.log(this.tentativas);

  }
  private trocaFrase(): void {
    if (this.rodada < FRASES.length) {
      this.rodada++;
      this.atualizaRodada();
    } else {
      this.rodada = 0;
      this.atualizaRodada();
    }

  }
  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = "";
  }
}
