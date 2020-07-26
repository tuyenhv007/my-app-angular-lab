import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  first: number;
  second: number;
  operator: "+";
  output: number;

  constructor() {
  }

  onFirstChange(value) {
    this.first = Number(value);
  }

  onSecondChange(value) {
    this.second = Number(value);
  }

  onSelectChange(value) {
    this.operator = value;
  }

  calculate() {
    if (this.operator === '+') {
      this.output = this.first + this.second;
    } else if (this.operator === '-') {
      this.output = this.first - this.second;
    } else if (this.operator === '*') {
      this.output = this.first * this.second;
    } else if (this.operator === '/') {
      this.output = this.first / this.second;
    }
  }
}
