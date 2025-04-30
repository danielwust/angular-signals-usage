import { Component, signal, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meu-form',
  imports: [FormsModule],
  standalone: true,
  template: `
    <div>
      <h2>Digite seu nome:</h2>
      <input type="text" [(ngModel)]="nome" (input)="nomeDigitadoChange.emit(nome)">
      <button (click)="incrementarContador()">Clique aqui: {{ contador() }} vezes</button>
    </div>
  `,
  styles: [`
    div {
      border: 1px solid #ccc;
      padding: 15px;
      margin-bottom: 15px;
    }
    input[type="text"] {
      margin-bottom: 10px;
      padding: 8px;
      width: 200px;
    }
    button {
      padding: 10px 15px;
      cursor: pointer;
    }
  `],
})
export class MeuFormComponent {
  nome = '';
  contador = signal(0);

  @Output() contadorMudou = new EventEmitter<number>();
  @Output() nomeDigitadoChange = new EventEmitter<string>();

  incrementarContador() {
    this.contador.update(valor => valor + 1);
    this.contadorMudou.emit(this.contador());
  }
}
