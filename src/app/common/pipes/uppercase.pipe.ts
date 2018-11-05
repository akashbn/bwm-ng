import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UppercasePipe implements PipeTransform {

  transform(inputvalue: string): string {
      const transformedvalue = inputvalue.toUpperCase();
      return transformedvalue;
  }
}
