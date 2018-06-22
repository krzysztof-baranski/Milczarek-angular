import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Object[], property: string, descending: boolean): any {
    let sorted = _.sortBy(value, property);

  	if (descending) {
  		return sorted.reverse() ;
  	} 

	return sorted;
  }

}
