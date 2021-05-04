// This is basically the entry point to angular. The meeting place for all the components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // added for add todo form functionality

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component'; // .ts is implied

// This is the root app module
@NgModule({
  // Add new components here. The CLI will do this for you
  declarations: [
    AppComponent,
    TodosComponent, // added via CLI
    TodoItemComponent, HeaderComponent, AddTodoComponent, AboutComponent // added via CLI
  ],
  // Add modules like the HTTP module here.
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // added manually when we imported it.
    FormsModule, // added manually for add-todo component
  ],
  // Add services here
  providers: [],
  // Bootstraps with the main AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
