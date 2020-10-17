import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StripComponent } from './strip/strip.component';
import { LedComponent } from './led/led.component';
import { ColorFormatPipe } from './color-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StripComponent,
    LedComponent,
    ColorFormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
