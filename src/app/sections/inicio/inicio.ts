import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {

  constructor(private router: Router) {}

  goTo(ruta: string) {
    this.router.navigate([ruta]);
  }

  scrollToSecciones() {
    const el = document.getElementById('secciones');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}