import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIES } from '../../data/fallback-personas';
import { Category, PersonaAttribute, PersonaPayload } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {
  categories: Category[] = CATEGORIES;
  shareOptions = ['private', 'only with link', 'public'];
  attributes: PersonaAttribute[] = [
    { id: 1, name: 'Intelligence', level: 50 },
    { id: 2, name: 'Strength', level: 50 },
    { id: 3, name: 'Dexterity', level: 50 },
    { id: 4, name: 'Constitution', level: 50 },
    { id: 5, name: 'Wisdom', level: 50 },
    { id: 6, name: 'Charisma', level: 50 }
  ];
  personaId = 0;
  persona = {
    name: '',
    category_id: 1,
    story: '',
    share: 'private'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personaService: PersonaService
  ) {
    this.personaId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCategories();
    this.loadPersona();
  }

  get pageTitle(): string {
    return this.personaId ? 'Edit Persona' : 'Create Persona';
  }

  savePersona(): void {
    const payload: PersonaPayload = {
      ...this.persona,
      attributes: this.attributes
    };

    if (this.personaId) {
      this.personaService.updatePersona(this.personaId, payload).subscribe(() => {
        this.router.navigate(['/personas', this.personaId]);
      });
      return;
    }

    this.personaService.createPersona(payload).subscribe(() => {
      this.router.navigate(['/catalog']);
    });
  }

  private loadCategories(): void {
    this.personaService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  private loadPersona(): void {
    if (!this.personaId) {
      return;
    }

    this.personaService.getPersona(this.personaId).subscribe((persona) => {
      this.persona = {
        name: persona.name,
        category_id: persona.category_id,
        story: persona.story,
        share: persona.share
      };
      this.attributes = persona.attributes;
    });
  }
}
