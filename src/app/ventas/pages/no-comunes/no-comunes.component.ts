import { Component } from '@angular/core';
import { interval } from 'rxjs';

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
  clientes: string[] = ['Maria', 'Pedro', 'Juan','Sofia','Jorge'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }

  cambiarPersona() {
    this.nombre = 'Julieta';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.shift();
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Martin',
    edad: 35,
    direccion: 'Buenos Aires, Argentina'
  };

  //JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=> {
      resolve('Tenemos data de promesa');
    }, 3500)
  });
}
