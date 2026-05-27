import { Component } from '@angular/core';
import { CATEGORIES, FALLBACK_PERSONAS } from '../../data/fallback-personas';
import { Category, Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  personas: Persona[] = [];
  categories: Category[] = CATEGORIES;
  selectedCategory = 0;
  searchTerm = '';
  loading = true;

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.loadPersonas();
    this.personaService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  get filteredPersonas(): Persona[] {
    return this.personas.filter((persona) => {
      const matchesCategory =
        !this.selectedCategory || persona.category_id === this.selectedCategory;
      const search = this.searchTerm.trim().toLowerCase();
      const matchesSearch =
        !search ||
        `${persona.name} ${persona.story} ${persona.category}`
          .toLowerCase()
          .includes(search);
      return matchesCategory && matchesSearch;
    });
  }

  selectCategory(category: number): void {
    this.selectedCategory = category;
  }

  deletePersona(id: number): void {
    this.personaService.deletePersona(id).subscribe(() => {
      this.personas = this.personas.filter((persona) => persona.id !== id);
    });
  }

  private loadPersonas(): void {
    this.personaService.getPersonas().subscribe({
      next: (personas) => {
        this.personas = personas;
        this.loading = false;
      },
      error: () => {
        this.personas = FALLBACK_PERSONAS;
        this.loading = false;
      },
    });
  }
}
