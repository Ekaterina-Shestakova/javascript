"use strict";

let a = parseInt(prompt("Введите значение a: "));
let b = parseInt(prompt("Введите значение b: ")); 
let x = 0;
if( a > 0 && b > 0) {
    x = a-b;
    alert(x);
}
else ( a < 0 && b < 0); {
     x = a * b;
     alert(x);
}


