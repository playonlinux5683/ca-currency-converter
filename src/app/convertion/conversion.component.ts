import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConversionService} from '../services/conversion.service';
import {interval, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export interface IConversion {
  initialValue: number | undefined;
  fixedRate: number;
  customRate: number | undefined;
  initialCurrencySymbol: string;
  resultCurrencySymbol: string;
  resultValue: number;
}

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})

export class ConversionComponent implements OnInit, OnDestroy {
  private $destroy = new Subject();
  valueToConvert: number | undefined;
  fixedRate = 1.1;
  currentFixedRate = 1.1;
  public intervallTimer = interval(3000);
  customRate: number | undefined;
  initialCurrency = '€';
  initialCurrencySymbol = 'euro_symbol';
  resultCurrency = '$';
  resultCurrencySymbol = 'attach_money';
  conversionHistory: IConversion[] = [];

  constructor(
    private conversionService: ConversionService
  ) {
  }

  ngOnInit(): void {
    this.intervallTimer.pipe(takeUntil(this.$destroy)).subscribe(() => {
      this.currentFixedRate = this.conversionService.setFixedRate(this.fixedRate);
    });
  }

  convertedValue(valueToConvert: number | undefined, currentFixedRate: number, customRate: number | undefined): number | string {
    const conversion = this.conversionService.convert(valueToConvert, currentFixedRate, customRate);
    if (conversion !== 0) {
      this.addToConversionHistory(conversion);
    }
    return conversion;
  }

  addToConversionHistory(resultValue: number): void {
    const conversion: IConversion = {
      initialValue: this.valueToConvert,
      fixedRate: this.fixedRate,
      customRate: this.customRate,
      initialCurrencySymbol: this.initialCurrencySymbol,
      resultCurrencySymbol: this.resultCurrencySymbol,
      resultValue
    };

    if (this.conversionHistory.length) {
      const lastConversion = this.conversionHistory[this.conversionHistory.length - 1];
      if (lastConversion.resultValue !== resultValue) {
        if (this.conversionHistory.length >= 5) {
          this.conversionHistory.shift();
        }
        this.conversionHistory.push(conversion);
      }
    } else {
      this.conversionHistory.push(conversion);
    }
  }

  swapCurrency(): void {
    [this.initialCurrency, this.resultCurrency] = [this.resultCurrency, this.initialCurrency];
    [this.initialCurrencySymbol, this.resultCurrencySymbol] = [this.resultCurrencySymbol, this.initialCurrencySymbol];
    this.valueToConvert = this.conversionService.convert(this.valueToConvert, this.fixedRate, this.customRate);
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
