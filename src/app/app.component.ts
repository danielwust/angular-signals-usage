import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
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
  styleUrl: './default-style.css',
  template: `
    <div style="display: flex; justify-content: space-around">
      <div>
        <h1 style="color: aqua;">Componente Pai</h1>

        <div>
          <h3>Digite seu nome:</h3>
          <input type="text" (input)="atualizarNome($any($event.target).value)" [value]="nomeDigitado()">
          <button (click)="atualizarContador(1)">Incrementar Contador</button>

          <p>Nome digitado no Pai: {{ nomeDigitado() }}</p>
          <p>Contador do Pai: {{ contador() }}</p>
        </div>

        <div>
          <p>Dados Combinados: {{ contadorComNome() }}</p>
        </div>
      </div>

      <div>
        <app-meu-form
          [contador]="contador()"
          [nomeDigitado]="nomeDigitado()"
          [contadorComNome]="contadorComNome()"
          (atualizarNome)="atualizarNome($event)"
          (atualizarContador)="atualizarContador($event)"
        ></app-meu-form>
      </div>
    </div>
  `,
  // Em caso de falha na reatividade, a variável não será atualizada até que ocorra uma interação (ex: clique)
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  contador = signal(0);
  nomeDigitado = signal('');

  contadorComNome = computed(() => `
    ${this.contador()}: ${this.nomeDigitado()}
  `);

  /**
   * Atualiza o valor do Signal 'contador' com o valor do evento.
   *
   * @param n É o número hard-coded no elemento HTML, será +1 ou -1.
   *
   * @example
   * <input (input)="atualizarContador(-1)" [value]="contador()">
   */
  atualizarContador(n = 0) {
    this.contador.update(c => c + n);
  }

  /**
   * Atualiza o valor do Signal 'nomeDigitado' com o valor do evento de input.
   *
   * @param event O evento de input do elemento HTML. Espera-se que 'event.target.value'
   *
   * @example
   * <input (input)="atualizarNome($event)" [value]="nomeDigitado()">
   */
  atualizarNome(nome: string) {
    this.nomeDigitado.update(o => nome);
  }
}
