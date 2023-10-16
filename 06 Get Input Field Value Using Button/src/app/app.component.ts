import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello From First-App!';
  name: string = '';
  getName(name: string) {
    this.name = name;
  }
}
