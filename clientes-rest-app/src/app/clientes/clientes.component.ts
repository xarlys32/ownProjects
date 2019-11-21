import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [{ id: 1, nombre: 'Pepi', apellido: 'Gonzalez', email: '@mail', fcAlta: '111' }];
  constructor() { }

  ngOnInit() {
  }

}
