import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() {
  }

  convert(valueToConvert: number | undefined, fixedRate: number): number | string {
    if (valueToConvert && fixedRate) {
      return valueToConvert * fixedRate;
    } else {
      return '';
    }
  }
}
