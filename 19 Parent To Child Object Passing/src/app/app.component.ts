import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pass Object to Child Component';
  users = [
    {
      name: 'Anil',
      email: 'Anil@gmail.com',
      phNo: '111',
    },
    {
      name: 'Ankit',
      email: 'Ankit@gmail.com',
      phNo: '222',
    },
    {
      name: 'Speed',
      email: 'Speed@gmail.com',
      phNo: '333',
    },
    {
      name: 'Mc-Stan',
      email: 'Mc-Stan@gmail.com',
      phNo: '444',
    },
  ];
}
