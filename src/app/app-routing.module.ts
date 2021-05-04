import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component'; // Added manually
import { AboutComponent } from './components/pages/about/about.component'; // added manually

const routes: Routes = [
  {
    path: '', // root path
    component: TodosComponent // (what to load) add our root component
  },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
