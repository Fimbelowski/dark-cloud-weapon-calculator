import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeaponGraphComponent } from './weapon-graph/weapon-graph.component';
import { WeaponComponent } from './weapon/weapon.component';
import { WeaponContainerComponent } from './weapon-container/weapon-container.component';

@NgModule({
  declarations: [AppComponent, WeaponGraphComponent, WeaponComponent, WeaponContainerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
