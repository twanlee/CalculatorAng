import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  output: number;
  firstNumber: number;
  secondNumber: number;
  operator = '+';

  onFirstChange(value) {
    this.firstNumber = Number(value);
  }

  onSecondChange(value) {
    this.secondNumber = Number(value);
  }

  onOperator(value) {
    this.operator = String(value);
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.output = this.firstNumber - this.secondNumber;
        break;
      case 'x':
        this.output = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.output = this.firstNumber / this.secondNumber;
        break;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
