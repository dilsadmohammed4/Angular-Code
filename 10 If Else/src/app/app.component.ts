import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'If Else Example';
  show1 = true;
  show2 = 'yess';
  show3 = false;
  setShow3() {
    this.show3 = true;
  }
}
