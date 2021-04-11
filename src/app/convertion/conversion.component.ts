import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  valueToConvert: any;
  fixedRate = 1.1;

  constructor() { }

  ngOnInit(): void {
  }

}
