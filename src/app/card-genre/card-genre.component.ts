import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-genre',
  templateUrl: './card-genre.component.html',
  styleUrls: ['./card-genre.component.scss']
})

export class CardGenreComponent implements OnInit {
  @Input() genre;
  constructor() {
  }

  ngOnInit() {
  }

}
