import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-shell',
  templateUrl: './page-shell.component.html',
  styleUrls: ['./page-shell.component.css']
})
export class PageShellComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() description = '';
}
