import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public calculatorButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+','-','C','='];
}
