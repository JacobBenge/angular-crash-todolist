import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../models/Todo';

// add the metadata to our http requests
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todosUrl:string = 'https://jsonplaceholder.typicode.com/todos'; // this is just sample data to load into the todos.
    todosLimit:string = '?_limit=5'; // limits the number of todos to load from api

    // assign http to the import
    constructor(private http: HttpClient) { }

    // Get Todos returns an array
    getTodos():Observable<Todo[]> {
        return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);// this is part of the HttpClient module. It returns an observable. Pass in the url as the argument
    }

    // Toggle Completed
    toggleCompleted(todo: Todo):Observable<any> {
        const url = `${this.todosUrl}/${todo.id}`; // url construction as directed by api
        return this.http.put(url, todo, httpOptions);
    }


    // getTodos() { // this is the hard coded sample data version
        // return [ // Automatically checks the model for Todo to ensure that it matches expected types
        //     {
        //         id: 1,
        //         title: 'Todo One',
        //         completed: false
        //     },
        //     {
        //         id: 2,
        //         title: 'Todo Two',
        //         completed: true
        //     },
        //     {
        //         id: 1,
        //         title: 'Todo Three',
        //         completed: false
        //     },
        // ]
    // }

    // Delete Todo
    deleteTodo(todo:Todo):Observable<Todo>{
        const url = `${this.todosUrl}/${todo.id}`; // url construction as directed by api
        return this.http.delete<Todo>(url, httpOptions); // this is a function from the HttpClient module
    }

    addTodo(todo:Todo):Observable<Todo>{
        return this.http.post<Todo>(this.todosUrl, todo, httpOptions); // send a post request with the url, todo, and headers set
    }
}
