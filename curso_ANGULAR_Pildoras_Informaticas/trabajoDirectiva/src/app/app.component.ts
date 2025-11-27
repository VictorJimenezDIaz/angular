import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de usuarios';
  mensaje = ""
  registrado = false
  nombre: String ="";
  apellido: String="";
  cargo: String="";
  entradas: { titulo:String }[] = [];

  constructor(){

    this.entradas = [
      {titulo: "Python cada dia mas presente"},
      {titulo: "Angular: Framework de desarrollo web"},
      {titulo: "La importancia de la ciberseguridad"},
    ]
  }

   registrarUsuario() {
    this.registrado = true
    this.mensaje = "Usuario registrado exitosamente ";
  }
}