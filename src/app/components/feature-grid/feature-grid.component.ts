import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-grid',
  templateUrl: './feature-grid.component.html',
  styleUrls: ['./feature-grid.component.css']
})
export class FeatureGridComponent {
  features = [
    { title: 'Clear profile', text: 'Give each persona a name, story, category, and sharing option.' },
    { title: 'Simple attributes', text: 'Use familiar RPG traits such as strength, wisdom, and charisma.' },
    { title: 'Small catalog', text: 'Browse, edit, and remove personas without extra account steps.' }
  ];
}
