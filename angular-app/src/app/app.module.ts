import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZapatillaComponent } from './zapatillas/zapatilla.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, ZapatillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ZapatillaComponent]
})
export class AppModule { }
