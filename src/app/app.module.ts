import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeaponGraphComponent } from './weapon-graph/weapon-graph.component';
import { WeaponComponent } from './weapon/weapon.component';
import { EdgeComponent } from './edge/edge.component';
import { LayoutComponent } from './layout/layout.component';
import { TerminiOptionsComponent } from './termini-options/termini-options.component';

@NgModule({
  declarations: [AppComponent, WeaponGraphComponent, WeaponComponent, EdgeComponent, LayoutComponent, TerminiOptionsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
