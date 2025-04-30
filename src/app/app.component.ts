import { Component, signal, WritableSignal } from '@angular/core';
import { MeuFormComponent } from './meu-form/meu-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MeuFormComponent, CommonModule],
  template: `
    <h1>Componente Pai</h1>
    <app-meu-form
      [contador]="contadorFilho"
      [nomeDigitado]="nomeDigitadoFilho"
      (atualizarNome)="atualizarNomeDigitado($event)"
      (incrementarContador)="incrementar()"
    ></app-meu-form>
    <p>Nome digitado no filho: {{ nomeDigitadoFilho() }}</p>
    <p>Contador do filho: {{ contadorFilho() }}</p>
  `,
  styles: [`
    h1 {
      color: blue;
    }
  `],
})
export class AppComponent {
  nomeDigitadoFilho = signal('');
  contadorFilho = signal(0);

  incrementar() {
    this.contadorFilho.update(c => c + 1)
  }

  atualizarNomeDigitado(novoNome: any | string) {
    this.nomeDigitadoFilho.update((old: string) =>
      old != novoNome ? novoNome : old
    );
  }
}
