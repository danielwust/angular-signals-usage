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
      <input type="text" (input)="atualizarNome($event)" [value]="nomeDigitado()">
      <p>Nome digitado no pai: {{ nomeDigitado() }}</p>
    </div>

    <div>
      <h3>Contador do Pai:</h3>
      <p>Valor: {{ contador() }}</p>
      <button (click)="atualizarContador(-1)">Decrementar Contador do Pai</button>
    </div>

    <p>Nome digitado no filho: {{ nomeDigitado() }}</p>
    <p>Contador do filho: {{ contador() }}</p>

    <app-meu-form
      [contador]="contador"
      [nomeDigitado]="nomeDigitado"
      [atualizarNome]="atualizarNome"
      [atualizarContador]="atualizarContador"
    ></app-meu-form>
  `,
})
export class AppComponent {
  contador = signal(0);
  nomeDigitado = signal('');

  atualizarContador(n = 0) {
    this.contador.update(c => c - n);
  }

  atualizarNome(event: any | string) {
    this.nomeDigitado.update(o => event?.target?.value);
  }
}
