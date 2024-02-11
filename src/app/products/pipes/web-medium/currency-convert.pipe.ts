import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvert'
})
export class CurrencyConvertPipe implements PipeTransform {

  transform(amount: number, exchangeRate: number): number {
    return amount * exchangeRate;
  }

}
