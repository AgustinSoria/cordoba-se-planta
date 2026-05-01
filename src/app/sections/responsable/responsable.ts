import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-responsable',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './responsable.html',
  styleUrls: ['./responsable.scss'],
})
export class Responsable {}