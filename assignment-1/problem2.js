// The function greet should return "Will Smith's age is 54."
// use template string
function greet() {
    let firstName = "Will";
    let lastName = "Smith";
    let age = 54;
  
    let greeting = firstName + " "+lastName +"'s age is " + age  ;
    return greeting;
  }

  var  result = greet();
console.log(result);