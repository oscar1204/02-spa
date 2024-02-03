import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/shared/navbar/navbar.component';
import { HomeComponent } from './componenets/home/home.component';
import { HeroesComponent } from './componenets/heroes/heroes.component';
import { AboutComponent } from './componenets/about/about.component';

//rutas
import {APP_ROUTING } from './app.route';
//servicios
import { HeroesService } from './servicios/heroes.service';
import { HeroeComponent } from './componenets/heroe/heroe.component';
import { BuscadorComponent } from './componenets/buscador/buscador.component';
import { HeroeTarjetaComponent } from './componenets/heroe-tarjeta/heroe-tarjeta.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
