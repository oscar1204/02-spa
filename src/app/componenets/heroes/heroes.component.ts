import { Component, OnInit, input} from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';






@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: ``
})
export class HeroesComponent {
heroes:Heroe[]=[];
constructor(private _heroesService:HeroesService,
            private router:Router
  ) {

}
ngOnInit() {
  this.heroes = this._heroesService.getheroes();
  //console.log(this.heroes)


}
verheroe(idx:number){
 console.log('idx')
 this.router.navigate(['/heroe',idx])
}
}
