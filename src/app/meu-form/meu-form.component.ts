import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
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
      <input type="text" (input)="atualizarNome.emit($any($event.target).value)" [value]="nomeDigitado()">
      <button (click)="atualizarContador.emit(-1)">Decrementar Contador</button>

      <p>Nome digitado no Filho: {{ nomeDigitado() }}</p>
      <p>Contador do Filho: {{ contador() }}</p>
    </div>

    <div>
      <p>Dados Combinados: {{ contadorComNome() }}</p>
    </div>
  `,
  // Em caso de falha na reatividade, a variável não será atualizada até que ocorra uma interação (ex: clique)
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeuFormComponent {
  contador = input<number>();
  nomeDigitado = input<string>();

  contadorComNome = input<string>();

  atualizarContador = output<number>();
  atualizarNome = output<any>();
}
