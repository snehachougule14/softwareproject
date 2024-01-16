import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  //The Angular directives are used to manipulate the DOM. By using Angular directives, you can change the appearance, behavior or a layout of a DOM element. It also helps you to extend HTML.
  //Angular 8 directives can be classified in 3 categories based on how they behave:
  //-1.Component Directives
  //-2.Structural Directives
  //-3.Attribute Directives
  //-Component directives are used in main class. They contain the detail of how the component should be processed, instantiated and used at runtime.
  //-Structural Directives: Structural directives start with a * sign. These directives are used to manipulate and change the structure of the DOM elements. For example, *ngIf directive, *ngSwitch directive, and *ngFor directive.
  //*ngIf Directive: The ngIf allows us to Add/Remove DOM Element.
  //*ngSwitch Directive: The *ngSwitch allows us to Add/Remove DOM Element. It is similar to switch statement of C#.
  //*ngFor Directive: The *ngFor directive is used to repeat a portion of HTML template once per each item from an iterable list (Collection).
  //Attribute Directives: Attribute directives are used to change the look and behavior of the DOM elements. For example: ngClass directive, and ngStyle directive etc.
  
 // ngClass Directive: The ngClass directive is used to add or remove CSS classes to an HTML element.
  //ngStyle Directive: The ngStyle directive facilitates you to modify the style of an HTML element using the expression. You can also use ngStyle directive to dynamically change the style of your HTML element.
    
city ="pune";

isShow = true;
}
