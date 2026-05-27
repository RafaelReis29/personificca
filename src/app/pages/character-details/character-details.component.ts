import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FALLBACK_PERSONAS } from '../../data/fallback-personas';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {
  persona?: Persona;

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personaService.getPersona(id).subscribe({
      next: (persona) => {
        this.persona = persona;
      },
      error: () => {
        this.persona = FALLBACK_PERSONAS.find((item) => item.id === id) ?? FALLBACK_PERSONAS[0];
      }
    });
  }
}
