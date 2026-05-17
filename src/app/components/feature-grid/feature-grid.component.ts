import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-grid',
  templateUrl: './feature-grid.component.html',
  styleUrls: ['./feature-grid.component.css']
})
export class FeatureGridComponent {
  features = [
    { title: 'Cognitive Mapping', text: 'Define the foundational logic and memory structures of your character.' },
    { title: 'Linguistic DNA', text: 'Craft voice, cadence, humor, principles, dialects, and emotional resonance.' },
    { title: 'Universal Bridge', text: 'Deploy your persona across apps, automations, APIs, and creative workflows.' }
  ];
}
