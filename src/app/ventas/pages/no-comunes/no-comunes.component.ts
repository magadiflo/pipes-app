import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Martín';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(): void {
    this.nombre = 'Alicia';
    this.genero = 'femenino';
  }

  borrarCliente(): void {
    this.clientes.splice(0, 1);
  }

  //KeyValuePipe
  persona = {
    nombre: 'Martín',
    edad: 35,
    direccion: 'Chimbote, Perú'
  }

  //JsonPipe
  heroes = [
    { nombre: 'Superman', vuela: true },
    { nombre: 'Robin', vuela: false },
    { nombre: 'Acuaman', vuela: false },
  ]

}
