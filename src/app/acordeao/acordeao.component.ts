import { Component, Input } from '@angular/core';
import { CalculadoraService } from '../service/calculadora.service';

@Component({
  selector: 'acordeao',
  templateUrl: './acordeao.component.html',
  styleUrls: ['./acordeao.component.sass']
})
export class AcordeaoComponent {
	@Input() titulo: string = "";
	@Input() texto: string = "";

	name:string = "";

	tituloBtn: string = "Botão 1";
	tipoBtn: string = "button";
	backgroundBtn: string = "#290197";

	constructor(private calculadoraService:CalculadoraService) {}

	soma:number = this.calculadoraService.somar(15, 5);
	subtracao:number = this.calculadoraService.subtrair(15, 5);
	multiplicacao:number = this.calculadoraService.multiplicar(15, 5);
	divisao:number = this.calculadoraService.dividir(15, 5);


	funcaoBtn($event: any) {
		console.log($event);
	}
}
