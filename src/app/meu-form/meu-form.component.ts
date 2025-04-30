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
      <input type="text" (input)="atualizarNome($event)" [value]="nomeDigitado()">
      <button (click)="atualizarContador(1)">Clique aqui: {{ contador() }} vezes</button>
    </div>
  `,
})
export class MeuFormComponent {
  @Input() nomeDigitado!: WritableSignal<string>;
  @Input() contador!: WritableSignal<number>;

  @Input() atualizarContador!: (event: any | string) => void;
  @Input() atualizarNome!: (event: any | string) => void;
}
