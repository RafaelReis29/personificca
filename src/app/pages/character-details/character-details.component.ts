import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PERSONAS, Persona } from '../../data/personas';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {
  persona: Persona = PERSONAS[0];
  related: Persona[] = [];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.persona = PERSONAS.find((item) => item.id === id) ?? PERSONAS[5];
    this.related = PERSONAS.filter((item) => item.id !== this.persona.id && item.creator === this.persona.creator).concat(PERSONAS.filter((item) => item.id !== this.persona.id)).slice(0, 4);
  }
}
