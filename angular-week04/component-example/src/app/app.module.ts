import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ClickerComponent } from './clicker/clicker.component';
import { ArrayExampleComponent } from './array-example/array-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ClickerComponent,
    ArrayExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
