import { Component, OnDestroy, OnInit } from '@angular/core';
import { Zapatilla } from './zapatilla';
import { FormsModule } from '@angular/forms';
import { ZapatillaService } from '../service/zapatilla.service';

@Component({
  selector: 'zapatilla-componente',
  templateUrl: './zapatilla.component.html',
  providers: [ZapatillaService]
})

export class ZapatillaComponent {
    public zapatillas : Array<Zapatilla>;
    public marcas : String[];
    public mi_marca : string;
    public color: string;
    constructor(
      private _zapatillaService: ZapatillaService
    ) {
      this.marcas = new Array();
    }

    ngOnInit(): void {
      this.zapatillas= this._zapatillaService.getZapatillas();
      this.establecerMarcas();
      console.log(this.marcas);
    }
    ngOnDestroy(): void {
       console.log('Zapatillas destruidas');
    }

    establecerMarcas() {
      this.zapatillas.forEach((value, index) => {
        this.marcas.push(value.nombre);
      });
    }

    getMarca() {
      alert(this.mi_marca);
    }

    addMarca() {
      this.marcas.push(this.mi_marca);
      console.log(this.marcas);
    }

    eliminarMarca(i) {
        this.marcas.splice(i);
    }

    onEnter() {
      console.log("Pulso enter!!");
    }
}