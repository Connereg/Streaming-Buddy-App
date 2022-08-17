import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StreamingBuddy';
  streamingServiceInput : String =""
  senderActiveStatus = false

  disablesNewMessage = true;

    netflix = [
      {
        title: "Bird Box",
        genre: "Mystery",
        active: true
      },
      {
        title: "Andy Kaufman Film",
        genre: "Psychological Horror",
        active: true
      },
      {
        title: "The Gray Man",
        genre: "Action",
        active: true
      }
    ]

    hbo = [
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

    ]

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

  constructor() {
    console.log("Initiating Angular AppComponent Class");
    setTimeout(() => {
      this.disablesNewMessage = !this.disablesNewMessage;
    }
    , 2000)
  }
}
