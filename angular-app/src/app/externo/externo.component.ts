import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';
import { CalculadoraPipe } from '../pipes/calculadora.pipe';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: Date;
  public new_user: any;
  public usuario_guardado;
  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.new_user = {
      "name": "",
      "job": ""
    };
  }

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

  onSubmit(form) {
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        this.usuario_guardado = response;
      },
      error => {
        console.log(error);
      }
    );
    form.reset();
  }
}
