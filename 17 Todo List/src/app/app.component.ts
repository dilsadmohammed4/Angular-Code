import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TodoList App';
  lists: any[] = [];
  addTask(task: string) {
    this.lists.push({
      id: this.lists.length,
      name: task,
    });
  }
  deleteTask(id: number) {
    this.lists = this.lists.filter((item) => item.id !== id);
  }
}
