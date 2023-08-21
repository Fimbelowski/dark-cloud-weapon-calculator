import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../sass/main.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'dark-cloud-weapon-calculator';
}
