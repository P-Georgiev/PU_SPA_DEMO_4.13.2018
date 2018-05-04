import { Component } from '@angular/core';
import { HeroService } from './services/hero/hero.service';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroes: Hero[];

  /**
   *
   */
  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.takeAllHeroes();
  }
}
