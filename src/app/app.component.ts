import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MeuFormComponent } from './meu-form/meu-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MeuFormComponent,
    CommonModule,
    FormsModule,
  ],
  styles: [` h1 { color: blue; } `],
  template: `
    <h1>Componente Pai</h1>

    <div>
      <h3>Digite seu nome:</h3>
      <input type="text" (input)="atualizarNome($event)" [value]="nomeDigitadoFilho()">
      <p>Nome digitado no pai: {{ nomeDigitadoFilho() }}</p>
    </div>

    <div>
      <h3>Contador do Pai:</h3>
      <p>Valor: {{ contadorFilho() }}</p>
      <button (click)="decrementarcontadorFilho()">Decrementar Contador do Pai</button>
    </div>

    <p>Nome digitado no filho: {{ nomeDigitadoFilho() }}</p>
    <p>Contador do filho: {{ contadorFilho() }}</p>

    <app-meu-form
      [contador]="contadorFilho"
      [nomeDigitado]="nomeDigitadoFilho"
    ></app-meu-form>
  `,
})
export class AppComponent {
  contadorFilho = signal(0);
  nomeDigitadoFilho = signal('');

  decrementarcontadorFilho() {
    this.contadorFilho.update(c => c - 1);
  }

  atualizarNome(event: any | string) {
    this.nomeDigitadoFilho.update(o => event?.target?.value);
  }
}
