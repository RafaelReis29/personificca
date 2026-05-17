import { Component } from '@angular/core';
import { PERSONAS, Persona } from '../../data/personas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredPersonas: Persona[] = PERSONAS.slice(0, 4);
}
