import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Persona } from '../../data/personas';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input({ required: true }) persona!: Persona;
  @Input() compact = false;
}
