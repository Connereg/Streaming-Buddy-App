import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  newFilmTitle: string = "";
  newFilmGenre: string = "Action";
  newFilmStreamingService: string = "HBO";
  newFilmActiveStatus = false;

  constructor() { }

  ngOnInit(): void {
  }

  submitNewFilm() {
    console.log(this.newFilmTitle + ", " + this.newFilmGenre + ", " + this.newFilmStreamingService)
  }

}
