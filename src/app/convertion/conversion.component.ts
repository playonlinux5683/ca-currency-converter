import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConversionService} from '../services/conversion.service';
import {interval, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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
    return this.conversionService.convert(valueToConvert, currentFixedRate, customRate);
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
