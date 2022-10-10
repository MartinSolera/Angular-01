import { Injectable } from "@angular/core";
import { HeroesComponent } from '../components/heroes/heroes.component';

@Injectable()
    export class HeroesService{


        constructor(){
            console.log("Servicio listo para usar");
        }

    }