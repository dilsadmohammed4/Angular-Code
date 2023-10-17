import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pass Data Child To Parent Component';
  name = '';
  updateData(name: string) {
    this.name = name;
  }
}
