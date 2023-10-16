import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello From First-App!';
  getName(name:string,age:number){
    alert(name+" "+age)
  }
}