import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() {
  }

  convert(valueToConvert: number | undefined, fixedRate: number, customRate: number | undefined): number | string {
    if (customRate && this.isCorrectVariation(customRate, fixedRate)) {
      return this.calculateConversion(valueToConvert, customRate);
    } else {
      return this.calculateConversion(valueToConvert, fixedRate);
    }
  }

  calculateConversion(value: number | undefined, rate: number): number | string {
    if (value && rate) {
      return value * rate;
    } else {
      return '';
    }
  }

  public isCorrectVariation(customRate: number, fixedRate: any): boolean {
    const variation = Math.abs(((customRate / fixedRate) - 1) * 100);
    return variation <= 2;
  }

  setFixedRate(fixedRate: number): number {
    const randomNumber = (Math.random() - 0.5) / 10;
    return fixedRate + randomNumber;
  }
}
