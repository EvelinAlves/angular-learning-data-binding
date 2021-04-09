import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  link = 'https://angular.io/guide/interpolation';

  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;
  nome = 'abc';

  pessoa: any = {
    nome: 'Evelin',
    idade: 32
  }

  nomeDoCurso =  'Angular';
  valorInicial = 20;

  onClick(): void {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent): void {
    this.valorAtual=(<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string): void {
    this.valorSalvo = valor;
  }

  onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any): void {
    console.log(evento.novoValor);
  }

}
