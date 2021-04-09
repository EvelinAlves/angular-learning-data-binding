import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @Output() mudouValor = new EventEmitter();
  @Input() valor = 15;

  @ViewChild('campoInput', { static: true })
  campoValorInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  
  decrementa(): void {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  incrementa(): void {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});

  }

}
