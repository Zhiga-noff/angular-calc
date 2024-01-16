import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input('user') user

  constructor() {
    console.log('constructor:', this.user)
    this.user
  }

  ngOnInit() {
    console.log('ngOnInit:', this.user)
  }
}
