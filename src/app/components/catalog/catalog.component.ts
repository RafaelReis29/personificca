import { Component } from '@angular/core';
import { PERSONAS, Persona } from '../../data/personas';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  personas: Persona[] = PERSONAS;
  categories = ['All', 'Fantasy', 'Sci-Fi', 'Cyberpunk', 'Steampunk', 'Historical'];
  selectedCategory = 'All';
  searchTerm = '';

  get filteredPersonas(): Persona[] {
    return this.personas.filter((persona) => {
      const matchesCategory = this.selectedCategory === 'All' || persona.category === this.selectedCategory;
      const search = this.searchTerm.trim().toLowerCase();
      const matchesSearch = !search || `${persona.name} ${persona.role} ${persona.creator}`.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
