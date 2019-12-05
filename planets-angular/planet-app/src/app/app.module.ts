import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetCreateComponent } from './planet-create/planet-create.component';
import { PlanetListComponent } from './planet-list/planet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetDetailComponent,
    PlanetCreateComponent,
    PlanetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
