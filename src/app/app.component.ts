import { Component, ViewEncapsulation } from '@angular/core';

import graph from 'src/services/weapons/swords/graph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../sass/main.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  swordGraph = graph;
  title = 'dark-cloud-weapon-calculator';
}
