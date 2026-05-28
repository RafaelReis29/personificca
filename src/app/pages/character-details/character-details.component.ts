import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {
  persona?: Persona;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personaService.getPersona(id).subscribe((persona) => {
      if (!persona) {
        this.notFound = true;
        return;
      }

      this.persona = persona;
    });
  }

  shareLabel(share: string): string {
    if (share === 'only_with_link') {
      return 'Apenas com link';
    }

    if (share === 'public') {
      return 'Pública';
    }

    return 'Privada';
  }
}
