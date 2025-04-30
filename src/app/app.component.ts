import { Component, signal } from '@angular/core';
import { MeuFormComponent } from './meu-form/meu-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MeuFormComponent, CommonModule],
  template: `
    <h1>Componente Pai</h1>
    <app-meu-form
      (contadorMudou)="atualizarContador($event)"
      (nomeDigitadoChange)="atualizarNomeDigitado($event)"
    ></app-meu-form>
    <p>Nome digitado no filho: {{ nomeDigitado() }}</p>
    <p>Contador do filho: {{ contadorFilho() }}</p>
  `,
  styles: [`
    h1 {
      color: blue;
    }
  `],
})
export class AppComponent {
  nomeDigitado = signal('');
  contadorFilho = signal(0);

  atualizarContador(novoContador: number) {
    this.contadorFilho.set(novoContador);
  }

  atualizarNomeDigitadoNao(novoNome: any) {
    this.nomeDigitado.set(novoNome);
  }

  atualizarNomeDigitado(novoNome: any | string) {
    this.nomeDigitado.update((old: string) =>
      old != novoNome ? novoNome : old
    );
  }
}
