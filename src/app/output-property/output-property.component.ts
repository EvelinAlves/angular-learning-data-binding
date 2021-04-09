import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Output() mudouValor = new EventEmitter();

  @Input() valor = 15;

  constructor() { }

  ngOnInit(): void {
  }
  
  decrementa(): void {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  incrementa(): void {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});

  }


}
