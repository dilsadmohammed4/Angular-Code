import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive form';

  loginForm = new FormGroup({
    username: new FormControl(''), //controller
    password: new FormControl(''),
  });

  userLogin() {
    console.log(this.loginForm.value);
  }
}
