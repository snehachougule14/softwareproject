
function addNumber(){
    let number = parseInt(prompt("Enter a number"));
    for(let i = 1 ; i <=10; i++){
         res = number * i;
       console.log(res);  
       document.write( '<br>')  ;
       document.write( res )  ;
    }
    //document.getElementById("table").innerHTML = number + '<br>'
   }