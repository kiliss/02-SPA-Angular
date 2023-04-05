import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent {
  @Input() heroe: any = {};
  @Input() idx: number = 0;
  // @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(
    private router: Router

  ) {
    // this.heroeSeleccionado = new EventEmitter();
   }
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
    // this.heroeSeleccionado.emit(idx);
  }
}
