import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: ``
})
export class BuscadorComponent {

       heroes:any[]=[]
       Termino:string|undefined;


      constructor(private _activateroute:ActivatedRoute,
                   private _heroeService:HeroesService){

         this._activateroute.params.subscribe(params=>{
          //console.log(params['termino'])
          this.Termino=params['termino'];
          this.heroes= this._heroeService.buscarHeroe(params['termino'])
          console.log(this.heroes)
         })
      }


}

