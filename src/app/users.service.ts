import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  gg =  new EventEmitter <string>();
  __userName;
  set userName(value) {
    this.__userName = value;
    this.gg.emit(value);
  };

  userLocal = JSON.parse(localStorage.getItem('currentUser'));

  constructor() { }
}
