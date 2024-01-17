import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
  @Input('calculatorButtons') calculatorButtons;

  public result = 0;
  public symbolFlag = '';
  public actionFlag: boolean = false;
  public count = 0;
  public styleResult = 'fieldResult';
  public numbersButtons = [];

  ngOnInit() {
    this.filterButtonNumbers(this.calculatorButtons);
  }

  filterButtonNumbers(buttons) {
    buttons.forEach((button) => {
      if (!isNaN(button)) {
        this.numbersButtons.push(button);
        return;
      }
    });
  }

  clickToResetButton() {
    this.symbolFlag = '';
    this.result = 0;
    this.count = 0;
    this.styleResult = 'fieldResult';
  }

  changeFieldResult(button) {
    if (this.result === 0 || this.actionFlag) {
      this.result = Number(button);
      this.actionFlag = false;
      return;
    }
    this.result = Number(`${this.result}` + `${button}`);
  }

  changeFieldAction(actionButton): number | void {
    this.symbolFlag = actionButton;
    this.actionFlag = true;
    console.log(this.count);

    if (this.symbolFlag === '-') {
      this.count = this.result - this.count;
    }
    if (this.symbolFlag === '+') {
      this.count = this.result + this.count;
    }
  }

  clickToResultButton() {
    this.getResult();
    // this.result = this.count;
    this.count = 0;
    this.symbolFlag = '';
    this.styleResult = 'fieldResult active';
  }

  getResult() {
    console.log(this.symbolFlag);
    if (this.symbolFlag === '+') {
      this.result = this.count + this.result;
    }
    if (this.symbolFlag === '-') {
      this.result = this.count - this.result;
    }
  }
}
