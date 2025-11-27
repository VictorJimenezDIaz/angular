import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from "./empleados/empleados.component";
import { EmpleadoComponent } from './empleado/empleado.component';  


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmpleadosComponent, EmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'miprimeraApp';
  //Añadimos la propiedad saludo
  saludo = 'Hola a todos desde mi primera app en Angular';
}
