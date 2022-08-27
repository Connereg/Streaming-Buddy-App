import { Component } from '@angular/core';
import { StreamingServiceDto } from './model/streaming-service-dto';
import { MovieDto } from './model/movie-dto';
import { ShowFilmsService } from './service/show-films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StreamingBuddy';
  streamingServiceInput : string = "All";
  genreSelectionInput : string = "All";
  filmActiveStatus = false;

  // MAYBE THROWAWAY
  allVisibleByGenre = true

  // VARIABLE TO STORE SEARCH DETAILS
  // searchedGenre = "";
  searchedStreamingService: MovieDto[] = [];


  streamingServices: StreamingServiceDto[] = [];

  constructor(private showFilmsService: ShowFilmsService) {
    this.streamingServices = showFilmsService.getAllFilms();
  }

  ngOnInit(): void {
    this.onUserPreference()
  }

  onSearchFormSubmissionSS(streamingServiceInput: string): void {
    this.streamingServiceInput = streamingServiceInput;
    this.onUserPreference();
  }

  onSearchFormSubmissionGS(genreSelectionInput: string): void {
    this.genreSelectionInput = genreSelectionInput;
    this.onUserPreference();
  }



  onUserPreference() {
    console.log("onUserPreference Working...")
    console.log("Captured Input: " + this.streamingServiceInput)
    // SEARCHING THROUGH NESTED StreamingServiceDto
    let newFilmArray: MovieDto[] = [];
// PSUEDO
//fetch -> imdb Api (StreamingService)
//
    if(this.streamingServiceInput == "All") {
      // NEED TO FILTER FURTHER BASED ON GENRE CRITERIA
      newFilmArray = this.streamingServices.map(streamingServiceDto => streamingServiceDto.films).flat()
      if(this.genreSelectionInput !== "All") {
        newFilmArray = newFilmArray.filter(film => film.genre.includes(this.genreSelectionInput))
      }

    }
    else if(this.streamingServiceInput !== "All") {
        // NEED TO FILTER FURTHER BASED ON GENRE CRITERIA
      newFilmArray = this.streamingServices.filter(streamingServiceDto => streamingServiceDto.name == this.streamingServiceInput).map(streamingServiceDto => streamingServiceDto.films).flat()
      if(this.genreSelectionInput !== "All") {
        newFilmArray = newFilmArray.filter(film => film.genre.includes(this.genreSelectionInput))
      }
    }
    this.searchedStreamingService = newFilmArray
  }
}

