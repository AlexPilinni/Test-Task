import { Component, OnInit } from '@angular/core';
import { RouterOutlet} from "@angular/router";
import { slider, fader } from '../route-animation'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    //fader,
    slider,
    //transformer,
    //stepper
  ]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
