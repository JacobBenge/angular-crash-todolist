import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service'; // import the service to obtain the todos from api

// TS decorator that gives metadata about the component.
@Component({
    selector: 'app-todos', // This is how the html page references the component <app-todos></app-todos>
    templateUrl: './todos.component.html', // points to the html template file
    styleUrls: ['./todos.component.css'] // points to the styles for the component. Globals should be referenced in angular.json
})
export class TodosComponent implements OnInit {
    todos: Todo[]; // Typically in TS you'll include the data type, so for an array you set up a model so angular knows what to expect. Todo model is imported above

    //constructor should be used to import services. ngOnInit should be for other intialization tasks
    // assign todoService to connect to the imported TodoService. Finishes up in the ngOnInit()
    constructor(private todoService:TodoService) { }

    ngOnInit(): void {
        this.todoService.getTodos().subscribe(todos => {
            this.todos = todos;
        }); // asynchronous to retrieve data from api. .subscribe is similar to .then
        // this.todos = this.todoService.getTodos(); // obtain the todos from TodoService by calling the function we built. This is the hardcoded version
    }

    // this an event that is emitted by todo-item.component.ts and caught by todos.component.html
    deleteTodo(todo:Todo){
        // Remove from UI
        this.todos = this.todos.filter(t => t.id !== todo.id); // return all the todos that don't have that id.
        // Remove from server
        this.todoService.deleteTodo(todo).subscribe(); // since it is an observable, subsribe to it. The function is in todo.service.ts
    }

    addTodo(todo:Todo) {
        // add to server
        this.todoService.addTodo(todo).subscribe(todo => { // subscribe to the service observable
            this.todos.push(todo); // push onto the array
        })
        // add to UI
    }
}
