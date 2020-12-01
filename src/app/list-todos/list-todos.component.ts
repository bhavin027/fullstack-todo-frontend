import { Component, OnInit } from '@angular/core';

export class Todo {

  constructor(
    public id: number,
    public description: String,
    public status: boolean,
    public targetDate: Date
  ) {

  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Learn to Sing', false, new Date()),
    new Todo(3, 'Workout Day Exercise', false, new Date())
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
