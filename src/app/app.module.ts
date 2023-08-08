import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeaponGraphComponent } from './weapon-graph/weapon-graph.component';
import { WeaponComponent } from './weapon/weapon.component';
import { EdgeComponent } from './edge/edge.component';
import { LayoutComponent } from './layout/layout.component';
import { TerminusOptionsComponent } from './terminus-options/terminus-options.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { AttributeInputComponent } from './attribute-input/attribute-input.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponGraphComponent,
    WeaponComponent,
    EdgeComponent,
    LayoutComponent,
    TerminusOptionsComponent,
    NumberInputComponent,
    AttributeInputComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
