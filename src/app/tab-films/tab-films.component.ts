import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-tab-films',
  templateUrl: './tab-films.component.html',
  styleUrls: ['./tab-films.component.scss'],
})
export class TabFilmsComponent implements OnInit {
  movies = [];
  genres = [];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.movies = this.moviesService.movies;
    this.genres = this.moviesService.genres;
  }

  get searchValue() {
    return this.moviesService.getSearchField();
  }

}
