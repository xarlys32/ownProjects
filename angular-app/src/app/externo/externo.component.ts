import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';
import { CalculadoraPipe } from '../pipes/calculadora.pipe';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId:any;
  public fecha: Date;
  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.fecha = new Date();
  }

  cargarUsuario() {
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
        console.log(result);
      },
      error => {
        console.log(<any>error);
        
      }
    );
  }
}
