import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Basic Forms';
  user: any = {};
  display = false;
  getData(data: NgForm) {
    this.user = data;
  }
  toggle() {
    this.display = !this.display;
  }
}
