import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ //component directive :meta data of component
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
}) 
export class HomeComponent { // component class : properties ,constructor ,lifecycle hooks, method etc.
               // property section 

  //let/var/const city ="pune" var in js

  city : string= "pune"; //property 
  sName :any = true;
  name : string =" sneha";
  name2! : string;
  name3 :any;

  constructor(private router: Router ) {} // constuctor section 

//LH,METHODS
  signUpcompo() {

    this.name3 = "chougule";
    console.log ("city >>", this.city);
    console.log("signup function calling");
    this.test();
    this.router.navigateByUrl("signUp");
    
   }

   test(){
    console.log("testing..");
   }

}
