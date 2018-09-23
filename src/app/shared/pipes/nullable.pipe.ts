import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'nullable'
})
export class NullablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return _.isNil(value) ? '—' : value;
  }

}
