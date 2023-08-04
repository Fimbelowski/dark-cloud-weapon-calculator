import { Component } from '@angular/core';

import swordGraph from 'src/services/weapon/sword/graph';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  weaponGraph = swordGraph;
}
