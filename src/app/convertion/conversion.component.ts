import {Component, OnInit} from '@angular/core';
import {ConversionService} from '../services/conversion.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  valueToConvert: number | undefined;
  fixedRate = 1.1;

  constructor(
    private conversionService: ConversionService
  ) {
  }

  ngOnInit(): void {
  }

  convertedValue(valueToConvert: number | undefined, fixedRate: number): number | string {
    return this.conversionService.convert(valueToConvert, fixedRate);
  }
}
