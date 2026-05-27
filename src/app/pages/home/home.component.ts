import { Component } from '@angular/core';
import { FALLBACK_PERSONAS } from '../../data/fallback-personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredPersonas: Persona[] = FALLBACK_PERSONAS.slice(0, 3);
}
