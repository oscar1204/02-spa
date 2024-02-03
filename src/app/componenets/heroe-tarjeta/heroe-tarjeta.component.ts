import { Component,input } from '@angular/core'
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: ``
})
export class HeroeTarjetaComponent {

@input() heroe:any= {};
@input() index:number

  constructor(private router: Router){
      
  }
  verheroe(){
    console.log
  this.router.navigate(['/heroe',this.index])
  
  }
}

