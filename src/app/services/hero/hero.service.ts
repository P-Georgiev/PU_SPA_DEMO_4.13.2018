import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Hero } from '../../model/hero';

@Injectable()
export class HeroService {

  constructor() { }

  takeAllHeroes(){
    const heroes: Hero[] = [
      { Id: 11, Name: 'Mr. Nice' },
      { Id: 12, Name: 'Narco' },
      { Id: 13, Name: 'Bombasto' },
      { Id: 14, Name: 'Celeritas' },
      { Id: 15, Name: 'Magneta' },
      { Id: 16, Name: 'RubberMan' },
      { Id: 17, Name: 'Dynama' },
      { Id: 18, Name: 'Dr IQ' },
      { Id: 19, Name: 'Magma' },
      { Id: 20, Name: 'Tornado' }
    ];

    return heroes;
  }
}
