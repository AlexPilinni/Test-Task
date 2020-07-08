import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent
} from '@angular/animations';
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.scss'],
  animations: [
    //
  ]
})

export class CardFilmComponent implements OnInit {
  @Input() movie: any;

  constructor() {  }

  ngOnInit() {

  }
}
