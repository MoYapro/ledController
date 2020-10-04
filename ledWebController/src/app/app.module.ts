import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StripComponent } from './strip/strip.component';
import { LedComponent } from './led/led.component';

@NgModule({
  declarations: [
    AppComponent,
    StripComponent,
    LedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
