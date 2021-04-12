import { Injectable } from '@angular/core';

const ACCEPTABLE_VARIATION = 2;

@Injectable({
  providedIn: 'root',
})
export class ConversionService {
  constructor() {}

  public convert(
    valueToConvert: number | undefined,
    fixedRate: number,
    customRate: number | undefined
  ): number {
    if (customRate && this.isCorrectVariation(customRate, fixedRate)) {
      return this.calculateConversion(valueToConvert, customRate);
    }
    return this.calculateConversion(valueToConvert, fixedRate);
  }

  private calculateConversion(value: number | undefined, rate: number): number {
    return value && rate ? value * rate : 0;
  }

  private isCorrectVariation(customRate: number, fixedRate: any): boolean {
    const variation = Math.abs((customRate / fixedRate - 1) * 100);
    return variation <= ACCEPTABLE_VARIATION;
  }

  public setFixedRate(fixedRate: number): number {
    const randomNumber = (Math.random() - 0.5) / 10;
    return fixedRate + randomNumber;
  }
}
