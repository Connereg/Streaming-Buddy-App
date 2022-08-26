import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../models/hero';
import { HeroService } from '../service/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero? : Hero; 

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(x => this.hero = x)
  }

  goBack(): void {
    this.location.back();
  }

}
