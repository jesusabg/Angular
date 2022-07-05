import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { PeliculasListComponent } from './peliculas-list/peliculas-list.component';
import { PeliculasformComponent } from './peliculasform/peliculasform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    PeliculasListComponent,
    PeliculasformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
