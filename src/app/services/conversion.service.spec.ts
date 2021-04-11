import {TestBed} from '@angular/core/testing';

import {ConversionService} from './conversion.service';

describe('ConversionService', () => {
  let service: ConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('convert should return empty 0', () => {
    const valueToConvert = undefined;
    const fixedRate = 1.1;
    const customRate = undefined;
    expect(service.convert(valueToConvert, fixedRate, customRate)).toEqual(0);
  });

  it('convert should return empty 2.2', () => {
    const valueToConvert = 2;
    const fixedRate = 1.1;
    const customRate = undefined;
    expect(service.convert(valueToConvert, fixedRate, customRate)).toEqual(2.2);
  });

  it('setFixedRate should return number different from fixedRate', () => {
    const fixedRate = 1.1;
    expect(service.setFixedRate(fixedRate)).not.toEqual(fixedRate);
  });

  it('isCorrectVariation should return false', () => {
    const fixedRate = 1.1;
    const customRate = 2.1;
    expect(service.isCorrectVariation(customRate, fixedRate)).toBeFalse();
  });

  it('isCorrectVariation should return false', () => {
    const fixedRate = 1.1;
    const customRate = 1.12;
    expect(service.isCorrectVariation(customRate, fixedRate)).toBeTrue();
  });
});
