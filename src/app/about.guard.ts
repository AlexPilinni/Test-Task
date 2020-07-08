import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UsersService} from "./users.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AboutGuard implements CanActivate{

  constructor() {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    if (JSON.parse(sessionStorage.getItem('currentUser'))) {
      return true;
    }
    else {
      alert('Вы не можете перейти в Плеер, пожалуйста, пройдите автоирзацию!');
      return false;
    }
  }
}
