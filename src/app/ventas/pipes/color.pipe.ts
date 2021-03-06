import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(color: number): string { 
    return Color[color];
  }

}
