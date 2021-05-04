import { Component } from '@angular/core';

// Typescript decorator that contains metadata about the component
@Component({
    selector: 'app-root', // This is how the html page references the component <app-root></app-root>
    templateUrl: './app.component.html', // points to the html template file
    styleUrls: ['./app.component.css'] // points to the styles for the component. Globals should be referenced in angular.json
})
export class AppComponent {
    // // name = 'Jacob Benge'; // JavaScript version which is okay but ts is recommended
    // name: string = 'Jacob Benge'; // TypeScript version includes the variable type. 

    // // constructors run on instanitation of the component (AppComponent)
    // constructor() {
    //     console.log('Constructor triggered on app.component.ts for AppComponent class')
    //     // this.changeName('Jake'); // Practice calling changeName. Without the argument it shows an error
    // }

    // // changeName(name:string):void{ // Accepts a argument of type string for name. void means it doesn't return anything.
    // //     this.name = name;
    // // }
}
