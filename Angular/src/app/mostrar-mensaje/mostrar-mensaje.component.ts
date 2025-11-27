import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {
mensaje: string= " ";

resetearMensaje() {
this.mensaje = " ";
}

mostrarMensaje() {
this.mensaje = "HOLA, HAS HECHO CLICK EN EL BOTÓN";
}

}
