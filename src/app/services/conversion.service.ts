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

  setFixedRate(fixedRate: number): number {
    const randomNumber = (Math.random() - 0.5) / 10;
    return fixedRate + randomNumber;
  }
}
