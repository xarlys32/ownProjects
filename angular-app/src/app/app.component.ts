import { Component } from '@angular/core';
import { Configuracion } from './configuracion/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title_app = 'Alegra esa cara!';
  public mostrar_zapatilla: boolean = true;
  public Config;

  ngOnInit(): void {
    this.Config = Configuracion;
  }

  public ocultarZaptillas(value) {
    this.mostrar_zapatilla = value;
  }
}
