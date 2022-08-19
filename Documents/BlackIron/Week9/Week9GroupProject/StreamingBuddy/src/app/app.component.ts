import { Component } from '@angular/core';
import { StreamingServiceDto } from './streaming-service-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StreamingBuddy';
  streamingServiceInput : string = "All"
  genreSelectionInput : string = "All"
  filmActiveStatus = false
  allVisibleByGenre = true

  // VARIABLE TO STORE SEARCH DETAILS
  // searchedGenre = "";

  newFilmTitle = ""
  newFilmGenre = ""

  disablesNewMessage = true;

  // SEARCHING THROUGH NESTED StreamingServiceDto
  // streamingServices.filter(StreamingServiceDto => streamingServiceDto.name == searchedGenre )

  streamingServices: StreamingServiceDto[] = [
    {
      name: "Netflix",
      films: [
        {
          title: "Bird Box",
          genre: "Mystery",
          active: true
        },
        {
          title: "Im Thinking of Ending Things",
          genre: "Horror",
          active: true
        },
        {
          title: "The Grey Man",
          genre: "Action",
          active: true
        }
      ]
    },
    {
      name: "HBO",
      films: [
        {
          title: "Justice League",
          genre: "Action",
          active: true
        },
        {
          title: "The Wire",
          genre: "Drama",
          active: true
        },
        {
          title: "Whiplash",
          genre: "Drama",
          active: true
        },
      ]
    },
    {
      name: "Hulu",
      films: [
        {
          title: "127 Hours",
          genre: "Suspence",
          active: true
        },
        {
          title: "Looper",
          genre: "Action",
          active: true
        },
        {
          title: "Prometheus",
          genre: "Sci-Fi",
          active: true
        }
      ]
    }
  ]

  // OLD DATA STRUCTURE

  // allServices = {
  //       netflix: [
  //         {
  //           title: "Bird Box",
  //           genre: "Mystery",
  //           active: true
  //         },
  //         {
  //           title: "Andy Kaufman Film",
  //           genre: "Horror",
  //           active: true
  //         },
  //         {
  //           title: "The Gray Man",
  //           genre: "Action",
  //           active: true
  //         }
  //       ],

  //       hbo: [
  //         {
  //           title: "Justice League",
  //           genre: "Action",
  //           active: true
  //         },
  //         {
  //           title: "Fargo (TV)",
  //           genre: "Drama",
  //           active: true
  //         },
  //         { 
  //           title: "Whiplash",
  //           genre: "Drama",
  //           active: true
  //         }
  //       ],

  //       hulu: [
  //         {
  //           title: "127 Hours",
  //           genre: "Suspense",
  //           active: true
  //         },
  //         {
  //           title: "Looper",
  //           genre: "Action",
  //           active: true
  //         },
  //         {
  //           title: "Prometheus",
  //           genre: "Sci-Fi",
  //           active: true
  //         }
  //       ]
  //     }
      
  

  //   onUserPreference() {
  //   let newFilm = {
      
  //   }
  // }

  // onSendPlayer() {
  //   let newFilm = {
  //     name: this.senderName,
  //     sport: this.senderSport,
  //     active: this.senderActiveStatus
  //   }
  //   this.netflix.push(newFilm);
  // }

  chooseStreamingService() {
    let newArr: { title: string; genre: string; active: boolean; }[] = [];
    
    if(this.streamingServiceInput == "hbo") {
      newArr = this.allServices.hbo;
    }
    else if(this.streamingServiceInput == "netflix") {
      newArr = this.allServices.netflix;
    }
    else if(this.streamingServiceInput == "hulu") {
      newArr = this.allServices.hulu;
    }
    else { 
      newArr = this.allServices.hbo.concat(this.allServices.netflix).concat(this.allServices.hulu)
    }

    return newArr
  }

  chosenGenre() {
    let genreString = ""
    genreString = this.genreSelectionInput
    return genreString;
  }

  settingGenreFunc() {
    if(this.genreSelectionInput == "All") {
      this.allVisibleByGenre = true;
    }
    else {
      this.allVisibleByGenre = false
    }
  }

  constructor() {
    console.log("Initiating Angular AppComponent Class");
    setTimeout(() => {
      this.disablesNewMessage = !this.disablesNewMessage;
    }
    , 2000)
  }
}

