import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  @Input('calculatorButtons') calculatorButtons

  public result = 0
  public symbolFlag = ''
  public actionFlag: string | boolean = ''
  public count = 0
  public styleResult = 'fieldResult'

  public numbersButtons = []
  public actionsButtons = []

  ngOnInit() {
    this.filterButtonNumbers(this.calculatorButtons)

  }

  filterButtonNumbers(buttons) {
    buttons.forEach(button => {
      if (!isNaN(button)) {
        this.numbersButtons.push(button)
        return
      }
    })
  }

  clickToResultButton() {
    // this.getResult()
    this.count = 0
    this.symbolFlag = ''
    this.actionResult(this.actionFlag)
    this.styleResult = 'fieldResult active'
  }

  clickToResetButton() {
    this.symbolFlag = ''
    this.result = 0
    this.count = 0
    this.styleResult = 'fieldResult'
  }

  changeFieldResult(action) {
    if (this.actionFlag) {
      this.actionFlag = action
      this.styleResult = 'fieldResult'
      return this.result = Number(action)
    }

    const number = `${this.result}` + action

    return this.result = Number(number)
  }

  // getResult() {
  //   if (this.symbolFlag === '+') {
  //     this.actionFlag = '+'
  //     return this.result = this.count + this.result
  //   }
  //   if (this.symbolFlag === '-') {
  //     this.actionFlag = '-'
  //     return this.result = this.count - this.result
  //   }
  // }

  actionResult(action) {
    if (this.actionFlag) {
      return
    }
    this.actionFlag = !this.actionFlag
  }

}
