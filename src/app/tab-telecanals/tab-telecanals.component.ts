import {Component, OnInit,  ViewChild} from '@angular/core';
import {MoviesService} from "../movies.service";
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-tab-telecanals',
  templateUrl: './tab-telecanals.component.html',
  styleUrls: ['./tab-telecanals.component.scss'],
  providers: [MoviesService]
})
export class TabTelecanalsComponent implements OnInit {
  channels = [];
  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.channels = this.moviesService.channels;
  }

}
