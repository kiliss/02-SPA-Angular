import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  buscarHeroe(termino: string) {
    console.log(termino);
  }
}
