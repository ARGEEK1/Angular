import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Filter',
})
export class FilterPipe implements PipeTransform {
  transform(values: string[], arg: string) {
    if (!arg || arg?.length < 3) return values;
    let resuts: string[] = [];
    for (const value of values) {
      if (value.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resuts = [...resuts, value];
      }
    }
    return resuts;
  }
}
