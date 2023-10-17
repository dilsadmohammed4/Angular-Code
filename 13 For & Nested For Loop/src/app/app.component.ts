import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'For Loop Example';
  users = ['Anil', 'Ankit', 'Speed', 'Mc-Stan'];
  userDetails = [
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
  peopleDetails = [
    {
      name: 'Anil',
      email: 'Anil@gmail.com',
      phNo: '111',
      socialMedia: ['Facebook', 'Instagram'],
    },
    {
      name: 'Ankit',
      email: 'Ankit@gmail.com',
      phNo: '222',
      socialMedia: ['Gmail', 'Tiktok'],
    },
    {
      name: 'Speed',
      email: 'Speed@gmail.com',
      phNo: '333',
      socialMedia: ['Fiver', 'Twitter'],
    },
    {
      name: 'Mc-Stan',
      email: 'Mc-Stan@gmail.com',
      phNo: '444',
      socialMedia: ['X', 'Skype'],
    },
  ];
}
