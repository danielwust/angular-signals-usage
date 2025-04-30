import { Component, Input, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meu-form',
  standalone: true,
  imports: [FormsModule],
  styleUrl: '../default-style.css',
  template: `
    <h1 style="color: yellowgreen;">Componente Filho</h1>

    <div>
      <h3>Digite seu nome:</h3>
      <input type="text" (input)="atualizarNome($event)" [value]="nomeDigitado()">
      <button (click)="atualizarContador(-1)">Decrementar Contador</button>

      <p>Nome digitado no Filho: {{ nomeDigitado() }}</p>
      <p>Contador do Filho: {{ contador() }}</p>
    </div>
  `,
})
export class MeuFormComponent {
  @Input() nomeDigitado!: WritableSignal<string>;
  @Input() contador!: WritableSignal<number>;

  @Input() atualizarContador!: (event: any | string) => void;
  @Input() atualizarNome!: (event: any | string) => void;
}
