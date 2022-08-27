import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-films-form',
  templateUrl: './search-films-form.component.html',
  styleUrls: ['./search-films-form.component.css']
})
export class SearchFilmsFormComponent implements OnInit {

  @Input() streamingServiceInput?: string;
  @Input() genreSelectionInput?: string;
  @Output() searchStreamingSChange = new EventEmitter<string>();
  @Output() searchGenreChange = new EventEmitter<string>();


  // streamingServiceInput : string = "All"
  // genreSelectionInput : string = "All"
  filmActiveStatus = false

  constructor() { }

  ngOnInit(): void {
    this.triggerPreferenceChange()
  }

  triggerPreferenceChange() {
    this.searchStreamingSChange.emit(this.streamingServiceInput);
    this.searchGenreChange.emit(this.genreSelectionInput);
  }



}
