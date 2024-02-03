
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './componenets/home/home.component';
import { AboutComponent } from './componenets/about/about.component';
import { HeroesComponent } from './componenets/heroes/heroes.component';
import { HeroeComponent } from './componenets/heroe/heroe.component';
import { BuscadorComponent } from './componenets/buscador/buscador.component';




const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'heroes', component:HeroesComponent},
  { path: 'about', component: AboutComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  {path: 'buscar/:termino', component:BuscadorComponent},
  { path: '**', pathMatch:'full',redirectTo:'home'},


];



export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);
