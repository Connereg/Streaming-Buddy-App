import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`You selecetd Hero with ID of ${hero.id} and name of ${hero.name}`);
    console.log(this.selectedHero)
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(x => {
      console.log(x);
      this.heroes = x;
    })
  }

}
