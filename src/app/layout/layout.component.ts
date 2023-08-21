import { Component } from '@angular/core';

import graph from 'src/services/weapons/swords/graph';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  weaponGraph = graph;
}
