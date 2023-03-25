import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.sass']
})
export class BotaoComponent {
	@Input() titulo: string = "";
	@Input() tipo: string = "";
	@Input() background:string = "";

	@Output('funcaoClick') emissor:EventEmitter<any> = new EventEmitter();
	
	funcao($event?:any) {
		console.log($event);
		this.emissor.emit(`“O título do botão é ${this.titulo} onde seu tipo é ${this.tipo} com a cor de fundo ${this.background}”`)
	}
}
