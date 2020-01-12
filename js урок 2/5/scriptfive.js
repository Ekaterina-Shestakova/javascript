"use strict"

/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
 function addSum(a,b){
     return a + b;
 }
  let result = addSum(4,5);
  alert(result);

  /**
   * 
   * @param {*} a 
   * @param {*} b 
   */
  function subSum(a,b){
      return a - b;
  }
 let resultOne = subSum(6,2);
 alert(resultOne);

  
   /**
    * 
    * @param {*} a 
    * @param {*} b 
    */

  function multiplication(a,b){
      return a * b; 
  }
  let resultTwo = multiplication(8,8);
  alert(resultTwo);

function divSum(a,b){
    return a / b;
}
let resultThree = divSum(5,5);
alert(resultThree);


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addSum(arg1, arg2);
        case "-":
            return subSum(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return divSum(arg1, arg2);
    }
    }
        alert(mathOperation(4, 5, "+"));
        alert(mathOperation(4, 5, "-"));
        alert(mathOperation(4, 5, "*"));
        alert(mathOperation(4, 5, "/"));