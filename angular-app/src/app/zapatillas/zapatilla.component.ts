import { Component, OnDestroy, OnInit } from '@angular/core';
import { Zapatilla } from './zapatilla';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'zapatilla-componente',
  templateUrl: './zapatilla.component.html'
})

export class ZapatillaComponent {
    public zapatillas : Array<Zapatilla>;
    public marcas : String[];
    public mi_marca : string;
    public color: string;
    constructor() {
        this.zapatillas = [new Zapatilla('Adidas', 'Air', 129)
        ,new Zapatilla('Nike', 'Jordan', 300), new Zapatilla('Vans', 'Skater', 80)];
        this.marcas = new Array();
        console.log(this.zapatillas);
    }

    ngOnInit(): void {
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