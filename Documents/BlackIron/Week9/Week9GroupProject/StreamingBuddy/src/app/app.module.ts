import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowFilmsComponent } from './show-films/show-films.component';
import { SearchFilmsFormComponent } from './search-films-form/search-films-form.component';
import { AddFilmComponent } from './add-film/add-film.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowFilmsComponent,
    SearchFilmsFormComponent,
    AddFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
