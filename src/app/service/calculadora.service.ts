import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

	somar (n1:number, n2:number):number {
		return n1 + n2;
	}

	subtrair(n1:number, n2:number):number {
		return n1 - n2;
	}

	multiplicar(n1:number, n2:number):number {
		return n1 * n2;
	}

	dividir(n1:number, n2:number):number {
		return n1 / n2;
	}
}
