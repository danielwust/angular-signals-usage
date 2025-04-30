import { Component, Input, signal, WritableSignal, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div>
      <h2>Digite seu nome:</h2>
      <input type="text" [(ngModel)]="nome" (input)="atualizarNomeNoPai(nome)">
      <button (click)="incrementar()">Clique aqui: {{ contadorInterno() }} vezes</button>
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

  @Input() nomeDigitado!: Signal<string>;
  @Input() contador!: WritableSignal<number>;
  @Output() atualizarNome = new EventEmitter<string>();
  @Output() incrementarContador = new EventEmitter<number>();

  contadorInterno = signal(0);

  atualizarNomeNoPai(novoNome: string) {
    this.atualizarNome.emit(novoNome);
  }

  incrementar() {
    this.contadorInterno.update(c => c + 1);
    this.incrementarContador.emit(1);
  }
}
