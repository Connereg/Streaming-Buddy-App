import { Injectable } from '@angular/core';
import { ALLFILMS } from '../model/mock-films-list';
import { MovieDto } from '../model/movie-dto';
import { StreamingServiceDto } from '../model/streaming-service-dto';

@Injectable({
  providedIn: 'root'
})
export class ShowFilmsService {

  constructor() { }

  getAllFilms() {
    let allFilmsByStreamingService: StreamingServiceDto[] = ALLFILMS;
    return allFilmsByStreamingService;
  }

  // addNewFilm(film: MovieDto) {
  //   // PUSH NEW FILM OBJECT TO ARRAY AT STREAMING SERVICE LOCATION
  //   for(streamingService: StreamingServiceDTO in ALLFILMS) {
     

  //   }
  // }
}
