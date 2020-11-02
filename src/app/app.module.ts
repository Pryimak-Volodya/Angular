import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnketaComponent } from './anketa/anketa.component';
import { Anketa2Component } from './anketa2/anketa2.component';


@NgModule({
  declarations: [
    AppComponent,
    AnketaComponent,
    Anketa2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
