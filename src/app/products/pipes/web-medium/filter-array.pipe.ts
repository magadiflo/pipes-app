import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(items: any[], propery: string, filterValue: any): any[] {
    return items.filter(item => item[propery] === filterValue);
  }

}
