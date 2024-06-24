import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';
import {ClickMeComponent} from './click-me.component';
import { ClickMeGcdsComponent } from './click-me-gcds.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    ClickMeGcdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GcdsComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
