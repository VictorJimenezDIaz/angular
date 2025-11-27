import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Empleado } from './empleado.model';
import { CommonModule } from '@angular/common';
import { EmpleadoHijoComponentComponent } from "./empleado-hijo-component/empleado-hijo-component.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, EmpleadoHijoComponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de empleados';

  empleados: Empleado[] = [
    new Empleado("Victor", "Jimenez", "Director", 75000),
    new Empleado("Ana", "Lopez", "Jefa de proyecto", 55000),
    new Empleado("Maria", "Gomez", "Administrativa", 35000),
    new Empleado("Lucia", "Martinez", "Diseñadora", 40000),
    new Empleado("Pedro", "Sanchez", "Programador", 45000),
  ];

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
}
}
