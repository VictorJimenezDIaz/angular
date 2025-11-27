import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-empleado',
  imports: [FormsModule, CommonModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  nombre = "Victor";
  apellido = "Jimenez";
  edad = 7;
  empresa = "empresa1";

  habilitacionCuadro = false;

  usuRegistrado = false;

  textoRegistro = "No hay nadie registrado";

  getRegistroUsuario() {
    this.usuRegistrado=false;
  }

  setusuarioRegistrado(event : Event) {
    //alert("El usuario está registrado");
    //this.textoRegistro = "El usuario está registrado";

    if ((<HTMLInputElement>event.target).value == "si") {
      this.textoRegistro = "El usuario está registrado";
    } else {
      this.textoRegistro = "El usuario no está registrado";
    }
  }

}