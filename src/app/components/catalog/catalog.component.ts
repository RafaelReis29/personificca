import { Component } from '@angular/core';
import { Category, Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  personas: Persona[] = [];
  categories: Category[] = [];
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
    const search = this.searchTerm.trim().toLowerCase();

    return this.personas.filter((persona) => {
      const matchesCategory = !this.selectedCategory || persona.category_id === this.selectedCategory;
      const matchesSearch = !search || persona.name.toLowerCase().includes(search);
      return matchesCategory && matchesSearch;
    });
  }

  deletePersona(id: number): void {
    this.personaService.deletePersona(id).subscribe(() => {
      this.personas = this.personas.filter((persona) => persona.id !== id);
    });
  }

  private loadPersonas(): void {
    this.personaService.getPersonas().subscribe((personas) => {
      this.personas = personas;
      this.loading = false;
    });
  }
}
