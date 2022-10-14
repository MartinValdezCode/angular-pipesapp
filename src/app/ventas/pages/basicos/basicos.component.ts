import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'martín';
  nombreUpper: string = 'MARTÍN';
  nombreCompleto: string = 'mArTín ValdEz';

  fecha: Date = new Date();
}
