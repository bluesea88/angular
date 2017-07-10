import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {

ngOnInit(): void {
  this.getHeroes();
}

constructor(private heroService: HeroService){
}
 heroes: Hero[];
 selectedHero: Hero; 
  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // TO NOTICE Define call back for asynchronus call of Promise 
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}



