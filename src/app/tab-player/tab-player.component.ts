import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {IMovie, MoviesService} from "../movies.service";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-tab-player',
  templateUrl: './tab-player.component.html',
  styleUrls: ['./tab-player.component.scss']
})

export class TabPlayerComponent implements OnInit {
  private id: number;
  movie: IMovie;
  comment;
  private subscription: Subscription;

  constructor(private usersService: UsersService, private movieService: MoviesService, private activateRoute: ActivatedRoute){
    this.subscription = activateRoute.params.subscribe(params=> this.id = +params['id']);
  }

  ngOnInit() {
    this.updateMovies();
  }

  updateMovies() {
    this.movie = this.movieService.getMovie('id', this.id);
  }

  publishComment = () => {
    this.movieService.setComment(this.usersService.__userName, this.comment, this.id);
    this.updateMovies();
    this.comment = '';
  }
}
