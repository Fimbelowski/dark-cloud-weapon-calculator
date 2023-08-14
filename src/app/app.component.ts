import { Component } from '@angular/core';

import graph from 'src/services/weapons/swords/graph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  graph = graph;
  title = 'dark-cloud-weapon-calculator';
}
