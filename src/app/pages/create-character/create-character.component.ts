import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attribute, Category, PersonaAttribute, PersonaPayload } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {
  categories: Category[] = [];
  shareOptions = [
    { value: 'private', label: 'Privada' },
    { value: 'only_with_link', label: 'Apenas com link' },
    { value: 'public', label: 'Pública' }
  ];
  attributes: PersonaAttribute[] = [];
  personaId = 0;
  persona = {
    name: '',
    category_id: 0,
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

    if (this.personaId) {
      this.loadPersona();
      return;
    }

    this.loadAttributes();
  }

  get pageTitle(): string {
    return this.personaId ? 'Editar persona' : 'Criar persona';
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
      if (!this.persona.category_id && categories.length) {
        this.persona.category_id = categories[0].id;
      }
    });
  }

  private loadPersona(): void {
    this.personaService.getPersona(this.personaId).subscribe((persona) => {
      if (!persona) {
        this.router.navigate(['/catalog']);
        return;
      }

      this.persona = {
        name: persona.name,
        category_id: persona.category_id,
        story: persona.story,
        share: persona.share
      };
      this.attributes = persona.attributes;
    });
  }

  private loadAttributes(): void {
    this.personaService.getAttributes().subscribe((attributes) => {
      this.attributes = this.buildAttributes(attributes);
    });
  }

  private buildAttributes(attributes: Attribute[]): PersonaAttribute[] {
    return attributes.map((attribute) => ({
      id: attribute.id,
      name: attribute.name,
      level: 50
    }));
  }
}
