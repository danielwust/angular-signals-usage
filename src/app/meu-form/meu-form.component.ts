import { Component, Input, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meu-form',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './meu-form.component.css',
  template: `
    <div>
      <h2>Componente Filho:</h2>
      <h3>Digite seu nome:</h3>
      <input type="text" [(ngModel)]="nome" (input)="atualizarNome(nome)">
      <button (click)="incrementar()">Clique aqui: {{ contador() }} vezes</button>
    </div>
  `,
})
export class MeuFormComponent {
  nome = '';

  @Input() nomeDigitado!: WritableSignal<string>;
  @Input() contador!: WritableSignal<number>;

  incrementar() {
    this.contador.update(c => c + 1)
  }

  atualizarNome(novoNome: string) {
    this.nomeDigitado.update(o => novoNome);
  }
}
