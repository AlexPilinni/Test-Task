import { Component, OnInit, Input } from '@angular/core';
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-card-channel',
  templateUrl: './card-channel.component.html',
  styleUrls: ['./card-channel.component.scss'],
  providers: [MoviesService]
})

export class CardChannelComponent implements OnInit {
  @Input() channel;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

}
