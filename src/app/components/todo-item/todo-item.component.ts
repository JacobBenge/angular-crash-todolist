import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'; // added input so we can have the selector accept inputs. See todos.component.html // Added eventemitter and output for delete function

import { TodoService } from '../../services/todo.service'; // connect to service for the api
import { Todo } from 'src/app/models/Todo'; // where to look up the type for todo

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo; // accepts the input todo from the selector
    @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); // this is how to output an event. // Must be caught in the todos.component.html (parent)

    // inject the service
    constructor(private todoService:TodoService) { }

    ngOnInit(): void {
    }

    // Set Classes with the ngClass directive, which is called in todo-item.component.html. Used for Dynamic classes (strikethrough for completed)
    setClasses() {
        let classes = {
            todo: true, // condition
            'is-complete': this.todo.completed // class to apply if completed is true
        }
        return classes; //returns classes to the ngClass directive
    }

    // triggered by change event on the input checkbox for todo-item.component.html
    onToggle(todo) {
        // Toggle in UI
        todo.completed = !todo.completed; // flip the boolean
        // Toggle on Server
        this.todoService.toggleCompleted(todo).subscribe(todo => { // since the service is an observable asynchronous, we subscribe to it.
            console.log(todo);
        });
    }

    onDelete(todo) {
        this.deleteTodo.emit(todo);
    }
}
