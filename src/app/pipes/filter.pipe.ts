import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../services/data.service';

@Pipe({
  name: 'Filter',
})
export class FilterPipe implements PipeTransform {
  transform(cities: City[], arg: string): City[] {
    if (!arg || arg?.length < 3) return cities;
    let resuts: City[] = [];
    for (const city of cities) {
      if (city.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resuts = [...resuts, city];
      }
    }
    return resuts;
  }
}
