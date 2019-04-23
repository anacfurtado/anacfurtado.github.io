alert ("Welcome! Please view console on your browser.")



var name = ["Ana Clara Marques Furtado"]
var integer = [7]
var number = ["7"]
var egg = true;


console.log(name)
console.log(integer)
console.log(number)
console.log(egg)

console.log (5+2)
console.log (6+1)
console.log (10-3)
console.log (3+4)
console.log (14/2)




var countries = ["South Africa", "Australia", "Japan", "Greece"]
console.log (countries[0])
console.log (countries.length)
console.log( "The current time is " + new Date ())




var currentHour = new Date().getHours()
console.log (currentHour)


	if (currentHour == 11) {
		var msg = "It is 11 now"
	} else {
		var msg = "It is not 11 yet"
	} 

console.log(msg)


if (name.length - 2 <= 9)  {
  var msg = "My name is relatively short."
} else if (name.length - 2 >= 14) {
  var msg = "My name is relatively long."
} else {
  var msg = "My name is neither short nor long."
}

console.log(msg);



var currentTemperature = 43
var temperatureSA = 67



function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = "The temperature in New York City is " + fToCel + '\xB0C at 10:23.'
    console.log(message);
}

fToC(43);



function fToCe(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = "The temperature in South Africa is " + fToCel + '\xB0C at 10:23.'
    console.log(message);
}

fToCe(67);

//date

var date = new Date().getDate();
console.log (date);

//pattern

for ( var i = 0; i < 5; i++ ) {
  console.log("This loop ran " + i + " times<br>");
}


// for(var counter=0; counter<10; counter++){

//         var box2 = '<p class="bluetext"> hi </p>';
//         console.log(box2);
//         // $('.box1').text("hello"); 
//         $('.box1').append(box2); 
  
//   }

// for(var counter=0; counter<10; counter++){

//         var box2 = '<p class="redtext"> hi </p>';
//         $('.box1').append(box2); 
  
//   }

// for(var counter=0; counter<10; counter++){

//         var box2 = '<p class="yellowtext"> hi </p>';
//         $('.box1').append(box2); 
  
//   }

// for(var counter=0; counter<10; counter++){

//         var box2 = '<p class="fixedbox"> hi </p>';
//         $('.box1').append(box2); 
  
//   }
  

  for(var i=0; i<10; i++){

        var box2 = '<p class="bluetext"></p>';
        $('.box').append(box2); 
  
  }
  

for(var i=0; i<10; i++){

        var box2 = '<p class="greentext"></p>';
        $('.box').append(box2); 
  
  }

for(var i=0; i<10; i++){

        var box2 = '<p class="yellowtext"></p>';
        $('.box').append(box2); 
  
  }
  









