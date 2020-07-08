import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})


export class FormSearchComponent implements OnInit {

  search = '';

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

  getSearch() {
    if(this.search.trim() || this.search === "") {
      const searchData: string = this.search;
      this.moviesService.setSearchField(searchData);
    }
  }
}
