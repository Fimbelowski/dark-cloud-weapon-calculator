import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeaponGraphComponent } from './weapon-graph/weapon-graph.component';

@NgModule({
  declarations: [AppComponent, WeaponGraphComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
