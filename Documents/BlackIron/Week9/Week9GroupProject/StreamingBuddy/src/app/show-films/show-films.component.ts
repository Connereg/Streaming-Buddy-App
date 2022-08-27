import { Component, Input, OnInit } from '@angular/core';
import { MovieDto } from '../model/movie-dto';

@Component({
  selector: 'app-show-films',
  templateUrl: './show-films.component.html',
  styleUrls: ['./show-films.component.css']
})
export class ShowFilmsComponent implements OnInit {

  @Input() searchedStreamingService?: MovieDto[];
  constructor() { }

  ngOnInit(): void {
  }

}
