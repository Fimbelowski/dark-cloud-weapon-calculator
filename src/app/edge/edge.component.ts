import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edge',
  templateUrl: './edge.component.html',
  styleUrls: ['./edge.component.scss'],
})
export class EdgeComponent {
  @Input() from!: HTMLDivElement;
  @Input() to!: HTMLDivElement;
}
