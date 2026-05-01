import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-salud',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './salud.html',
  styleUrl: './salud.scss',
})
export class Salud {}