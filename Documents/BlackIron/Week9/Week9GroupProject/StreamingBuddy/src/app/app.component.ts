import { Component } from '@angular/core';

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

  newFilmTitle = ""
  newFilmGenre = ""

  disablesNewMessage = true;

  allServices = {
        netflix: [
          {
            title: "Bird Box",
            genre: "Mystery",
            active: true
          },
          {
            title: "Andy Kaufman Film",
            genre: "Horror",
            active: true
          },
          {
            title: "The Gray Man",
            genre: "Action",
            active: true
          }
        ],

        hbo: [
          {
            title: "Justice League",
            genre: "Action",
            active: true
          },
          {
            title: "Fargo (TV)",
            genre: "Drama",
            active: true
          },
          { 
            title: "Whiplash",
            genre: "Drama",
            active: true
          }
        ],

        hulu: [
          {
            title: "127 Hours",
            genre: "Suspense",
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

  constructor() {
    console.log("Initiating Angular AppComponent Class");
    setTimeout(() => {
      this.disablesNewMessage = !this.disablesNewMessage;
    }
    , 2000)
  }
}

