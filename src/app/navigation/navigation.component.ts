import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  private routes: ({ link: string; title: string } | { link: string; title: string })[];
  constructor() {

    this.routes = [
      {
        title: 'Фильмы',
        link: '/films'
      },
      {
        title: 'Телеканалы',
        link: '/canals'
      }
    ]
  }

  ngOnInit() {
  }

}
