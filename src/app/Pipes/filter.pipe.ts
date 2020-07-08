import { Pipe, PipeTransform } from '@angular/core';
import {IMovie} from "../movies.service";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: Array<IMovie>, search: string = ''): Array<IMovie> {
    if(!search.trim()) {
      return movies;
    }
    return movies.filter( movie => {
      return movie.title.toLowerCase().includes(search.toLowerCase())
    })
  }

}
