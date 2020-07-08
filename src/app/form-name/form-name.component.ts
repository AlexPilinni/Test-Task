import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from "../users.service";
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-form-name',
  templateUrl: './form-name.component.html',
  styleUrls: ['./form-name.component.scss']
})
export class FormNameComponent implements OnInit {
  placeholder;
  @Output() closeFormEditNameEmitter =  new EventEmitter();
  constructor(private usersService: UsersService, private moviesService: MoviesService) { }

  ngOnInit() {
    this.placeholder = this.usersService.__userName;
  }

  editName = () => {
    this.editCommentAuthor(this.usersService.__userName);
    this.usersService.userName = this.placeholder;
    this.closeFormEditName();
  };





  closeFormEditName = () => {
    this.closeFormEditNameEmitter.emit();
  };

  editCommentAuthor = (lastName) => {
    this.moviesService.movies.forEach(itemMovies => {
      for (let attrMovie in itemMovies) {
       if(attrMovie === 'comments'){
         let objComments = itemMovies.comments;
         objComments.forEach(comment => {
           for(let attrComment in comment) {
             if(attrComment === 'nickname') {
               if(comment[attrComment] === lastName) {
                 comment[attrComment] = this.placeholder;
               }
             }
           }
         })
       }
     }
    })
  }
}
