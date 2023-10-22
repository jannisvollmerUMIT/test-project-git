//this function calculates a Fahrenheit value (output) from a Celsius value (Input)
exports.celsiusToFahrenheit = function (celsius){
    return celsius*(9/5)
   }
   
   //this function calculates a Celsius value (output) from a Fahrenheit value (Input)
   exports.fahrenheitToCelcius = function (fahrenheit){
       return (fahrenheit-32)*(5/1) 
   }
   
   // this function returns a fitting greeting to the console based on the current time
   exports.getGreetingDependOnTime =  function (myDate) {
       const timeBegin = 6;
       const timeEnd = 22;
       const currentHour = myDate.getHours();
   
       if (currentHour >= timeBegin && currentHour < timeEnd){
           return "Guten Morgen";
       } else {
           return "Guten Abend";
       }
   }