import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navItems = [
    { label: 'Catalog', path: '/catalog' },
    { label: 'Create', path: '/create' },
    { label: 'Community', path: '/' }
  ];
}
