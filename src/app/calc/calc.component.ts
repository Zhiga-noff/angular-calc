import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  public result = 0
  public symbolFlag = ''
  public actionFlag = ''
  public count = 0
  public styleResult = 'fieldResult'

}
