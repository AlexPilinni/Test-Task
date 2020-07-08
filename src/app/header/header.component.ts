import {Component, OnInit} from '@angular/core';
import {style} from "@angular/animations";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  isRegOpen;
  isNameOpen;
  isButton = true;
  userName;
  constructor(private usersService: UsersService) {
    this.usersService.gg.subscribe((value) => {
      this.userName = value;
      this.isButton = !this.isButton;
    })
  }

  ngOnInit() {
    if( this.usersService.userLocal === null) {
      this.userName = '';
    }
    else {
      this.userName = this.usersService.userLocal.firstName;
      this.isButton = false;
    }
  }

  showFormRegistration() {
    this.isRegOpen = !this.isRegOpen;
  }
  showFormEditName() {
    this.isNameOpen = !this.isNameOpen;
  }

  showLoginButton() {
    this.isButton = !this.isButton;
    this.userName = '';
    sessionStorage.clear();
  }
}
