import { Component } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {
  identity = {
    name: '',
    origin: 'Cybernetic Wanderer',
    story: '',
    visibility: 63,
    logic: 42,
    charisma: 86,
    stealth: 12
  };
}
