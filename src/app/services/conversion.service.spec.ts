import { TestBed } from '@angular/core/testing';

import { ConversionService } from './conversion.service';

describe('ConversionService', () => {
  let service: ConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('convert should return empty string', () => {
    const valueToConvert = undefined;
    const fixedRate = 1.1;
    expect(service.convert(valueToConvert, fixedRate)).toEqual('');
  });

  it('convert should return empty 2.2', () => {
    const valueToConvert = 2;
    const fixedRate = 1.1;
    expect(service.convert(valueToConvert, fixedRate)).toEqual(2.2);
  });
});
