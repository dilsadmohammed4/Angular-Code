import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello From First-App!';
  data = 'Dilsad Mohammed.';
  getValue(){
    return 'Date : 16-10-2023'
  };
}