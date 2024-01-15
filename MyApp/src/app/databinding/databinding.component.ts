import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
// DB :communication between component & DOM
// 1.one way DB: 
       //One way databinding is a simple one way communication where HTML template is changed when we make changes in TypeScript code.
        // 1.String Interpolation {{}}
              //String Interpolation is a one-way databinding technique which is used to output the data from a TypeScript code to HTML template (view). It uses the template expression in double curly braces to display the data from the component to the view.
       // 2.Property Binding []
      // 3.Event Binding ()
           
// 2.two way DB [()]      



data : any ='we are learning String Interpolation';
amount : number = 6000000;
schoolName! : string;
isMatch=true;
name ="sneha";

x=7;
clickEventData:any;
city:any="sangli";


// = : assignment operator : to assign value to variable/ property
 // == : it will compair only value
   // === : it will compair value as well as datatype

test(){
  return 10*2;
  }

  clickevent(){
         this.clickEventData=" 678976"
  }


}
