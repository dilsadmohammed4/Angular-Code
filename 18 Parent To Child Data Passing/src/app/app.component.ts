import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pass Data to Child Component';
  data = 10;
  randomValue() {
    this.data = Math.floor(Math.random() * 1000);
  }
}
