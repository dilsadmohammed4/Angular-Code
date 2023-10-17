import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'STYLE BINDING EXAMPLE';
  color = 'black';
  bgColor = 'orange';
  changeColor() {
    this.color = 'white';
    this.bgColor = 'black';
  }
}
