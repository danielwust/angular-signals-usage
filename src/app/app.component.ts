import { Component, signal, WritableSignal } from '@angular/core';
import { MeuFormComponent } from './meu-form/meu-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MeuFormComponent,
    CommonModule,
  ],
  styles: [` h1 { color: blue; } `],
  template: `
    <h1>Componente Pai</h1>
    <p>Nome digitado no filho: {{ nomeDigitadoFilho() }}</p>
    <p>Contador do filho: {{ contadorFilho() }}</p>

    <app-meu-form
      [contador]="contadorFilho"
      [nomeDigitado]="nomeDigitadoFilho"
    ></app-meu-form>
  `,
})
export class AppComponent {
  nomeDigitadoFilho = signal('');
  contadorFilho = signal(0);
}
