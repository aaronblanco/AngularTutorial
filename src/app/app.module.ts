import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VideogameComponent } from './videogame/videogame.component';
import { VideogameDetailComponent } from './videogame-detail/videogame-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    VideogameDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
