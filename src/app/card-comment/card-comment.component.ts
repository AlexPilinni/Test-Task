import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.scss']
})
export class CardCommentComponent implements OnInit {
  @Input() comment: any;
  constructor( private usersService: UsersService, private moviesService: MoviesService) { }

  ngOnInit() {
  }

  delThisComment = () => {
    this.moviesService.delComment(this.comment.id);
  }
}
