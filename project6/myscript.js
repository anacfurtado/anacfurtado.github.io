//THESE ARE THE VARIABLES WE WILL USE
var windspeed; //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
var winddeg; //Wind direction, degrees (meteorological)
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 
var tempmin;
var tempmax;
var pressure; //Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
var humidity; //Humidity, %
var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)
var weatherdescription; //Weather condition within the group
var cloudiness; //Cloudiness, %
var h = 0, s = 50, l = 50;

$(document).ready(function() {

//UNSELECT
    $('.box-container').click(function() {
        $(this).toggleClass("expanded");
        $(".boxes").empty();
    })

// BUTTONS
    $(".rio").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".rio").toggleClass("btn-selected");
    });

    $(".sp").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".sp").toggleClass("btn-selected");
    });

    $(".ny").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".ny").toggleClass("btn-selected");
    });

    $(".ccg").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".ccg").toggleClass("btn-selected");
    });

    $(".tky").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".tky").toggleClass("btn-selected");
    });

    $(".paris").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".paris").toggleClass("btn-selected");
    });

    $(".barcelona").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".barcelona").toggleClass("btn-selected");
    });

    $(".melbourne").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".melbourne").toggleClass("btn-selected");
    });

    $(".helsinki").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".helsinki").toggleClass("btn-selected");
    });

    $(".ldn").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".ldn").toggleClass("btn-selected");
    });

    $(".sd").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".sd").toggleClass("btn-selected");
    });

    $(".rekj").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".rekj").toggleClass("btn-selected");
    });

    $(".ba").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".ba").toggleClass("btn-selected");
    });

    $(".jb").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".jb").toggleClass("btn-selected");
    });

    $(".ctg").click(function(){
        $(this).parent().find(".btn-selected").removeClass("btn-selected");
        $(".ctg").toggleClass("btn-selected");
    });
 

  //   function generateColor() {
  //   console.log("Color Generated");
  //   //h = Math.round(Math.random()*360);
  //   //$(".box1").css("background-color", "hsl("+l+","+s+","+l+")");
  // }

  // function generateShade() {
  //   console.log("Shade Gen");
  //   //l = Math.round(Math.random()*100);
  //   //$(".box1").css("background-color", "hsl("+l+","+s+","+l+")");
  // }

  // function setColor() {
  //   console.log("Set Color");
  //   console.log(h, s, l);
  //   console.log('hsla('+l+','+s+'%,'+l+'%,1)');
  //   //$(".box1").css({backgroundColor: 'hsla('+h+','+s+'%,'+l+'%, 1)'});
  //   //generateShade();
  //   $(".box2").css({backgroundColor: 'hsla('+h+','+s+'%,'+l+'%, 1)'});
  //   //generateShade();
  //   $(".box3").css({backgroundColor: 'hsla('+h+','+s+'%,'+l+'%, 1)'});
  //   //generateShade();
  //   $(".box4").css({backgroundColor: 'hsla('+h+','+s+'%,'+l+'%, 1)'});
  //   //generateShade();
  //   $(".box5").css({backgroundColor: 'hsla('+h+','+s+'%,'+l+'%, 1)'});
  // }

  // 

 //RIO 
  function determineSaturation (humidity, windspeed, temp, tempmax, tempmin) {
    console.log("determineSaturation");
    //var l1 = 0;
    if(humidity < 10) {
      l1=10;
      $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
    }
    else if(humidity > 20 && humidity < 30){
        l1=10;
        $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
      // do something
      //setColor();
    }

    else if(humidity > 30 && humidity < 40){
        l1=40;
        $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
        //setColor();
    }

    else if(humidity > 40 && humidity < 50){
        l1=50;
        $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
        //setColor();
    }

    else if(humidity > 50 && humidity < 60){
        l1=60;
        $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
        // setColor();
    }

    else if(humidity > 70 && humidity < 80){
        l1=80;
        $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
        // setColor();
    }
    else if(humidity > 80 && humidity < 90){
        l1=80;
        $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
        // setColor();
    }
    else if(humidity > 90 && humidity < 100){
        l1=100;
        $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
        // setColor();
    }   

// TEMP MIN

    if (tempmin < 0){
        l2=95;
        $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
    }
    else if (tempmin > 0 && tempmin < 10){
        l2=80;
        $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
    }
    else if (tempmin > 10 && tempmin < 20){
        l2=60;
        $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
    }
    else if (tempmin > 20 && tempmin < 30){
        l2=40;
        $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
    }
    else if (tempmin > 30 && tempmin < 40){
        l2=20;
        $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
    }
    else if (tempmin > 40 && tempmin < 50){
        l2=5;
        $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
    }

// TEMP 

    if (temp < 0){
        l3=0;
        $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
    }
    else if (temp > 0 && temp < 10){
        l3=10;
        $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
    }
    else if (temp > 10 && temp < 20){
        l3=20;
        $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
    }
    else if (temp > 20 && temp < 30){
        l3=30;
        $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
    }
    else if (temp > 30 && temp < 40){
        l3=40;
        $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
    }
    else if (temp > 40 && temp < 50){
        l3=50;
        $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
    }

// TEMP MAX 
    
    if (tempmax < 0){
        l4=95;
        $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
    }
    else if (tempmax > 0 && tempmax < 10){
        l4=80;
        $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
    }
    else if (tempmax > 10 && tempmax < 20){
        l4=60;
        $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
    }
    else if (tempmax > 20 && tempmax < 30){
        l4=40;
        $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
    }
    else if (tempmax > 30 && tempmax < 40){
        l4=20;
        $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
    }
    else if (tempmax > 40 && tempmax < 50){
        l4=5;
        $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
    }

// WINDSPEED
    }

                    //NYC

// // NYC
//     function determineSaturation (humidity2, windspeed2, temp2, tempmax2, tempmin2) {
//     console.log("determineSaturation");
//     //var l1 = 0;
//     if(humidity2 < 10) {
//       l1=10;
//       $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//     }
//     else if(humidity2 > 20 && humidity2 < 30){
//         l1=10;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//       // do something
//       //setColor();
//     }

//     else if(humidity2 > 30 && humidity2 < 40){
//         l1=40;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         //setColor();
//     }

//     else if(humidity2 > 40 && humidity2 < 50){
//         l1=50;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         //setColor();
//     }

//     else if(humidity2 > 50 && humidity2 < 60){
//         l1=60;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     }

//     else if(humidity2 > 70 && humidity2 < 80){
//         l1=80;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     }
//     else if(humidity2 > 80 && humidity2 < 90){
//         l1=80;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     }
//     else if(humidity2 > 90 && humidity2 < 100){
//         l1=100;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     }   

// // TEMP MIN

//     if (tempmin2 < 0){
//         l2=95;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin2 > 0 && tempmin2 < 10){
//         l2=80;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin2 > 10 && tempmin2 < 20){
//         l2=60;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin2 > 20 && tempmin2 < 30){
//         l2=40;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin2 > 30 && tempmin2 < 40){
//         l2=20;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin2 > 40 && tempmin2 < 50){
//         l2=5;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }

// // TEMP 

//     if (temp2 < 0){
//         l3=0;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp2 > 0 && temp2 < 10){
//         l3=10;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp2 > 10 && temp2 < 20){
//         l3=20;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp2 > 20 && temp2 < 30){
//         l3=30;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp2 > 30 && temp2 < 40){
//         l3=40;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp2 > 40 && temp2 < 50){
//         l3=50;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }

// // TEMP MAX 
    
//     if (tempmax2 < 0){
//         l4=95;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax2 > 0 && tempmax2 < 10){
//         l4=80;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax2 > 10 && tempmax2 < 20){
//         l4=60;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax2 > 20 && tempmax2 < 30){
//         l4=40;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax2 > 30 && tempmax2 < 40){
//         l4=20;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax2 > 40 && tempmax2 < 50){
//         l4=5;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
    
//   }

// //WINDSPEED


                    //SP
// // SP
//     function determineSaturation (humidity3, windspeed3, temp3, tempmax3, tempmin3) {
//     console.log("determineSaturation");
//     //var l1 = 0;
//     if(humidity3 < 10) {
//       l1=10;
//       $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//     }
//     else if(humidity3 > 20 && humidity3 < 30){
//         l1=10;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//       // do something
//       //setColor();
//     }

//     else if(humidity3 > 30 && humidity3 < 40){
//         l1=40;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         //setColor();
//     }

//     else if(humidity3 > 40 && humidity3 < 50){
//         l1=50;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         //setColor();
//     }

//     else if(humidity3 > 50 && humidity3 < 60){
//         l1=60;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     }

//     else if(humidity3 > 70 && humidity3 < 80){
//         l1=80;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     }
//     else if(humidity3 > 80 && humidity3 < 90){
//         l1=80;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     }
//     else if(humidity3 > 90 && humidity3 < 100){
//         l1=100;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     }  
//     else if(humidity3 == 100){
//         l1=100;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     }   

// // TEMP MIN

//     if (tempmin3 < 0){
//         l2=95;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin3 > 0 && tempmin3 < 10){
//         l2=80;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin3 > 10 && tempmin3 < 20){
//         l2=60;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin3 > 20 && tempmin3 < 30){
//         l2=40;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin3 > 30 && tempmin3 < 40){
//         l2=20;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin3 > 40 && tempmin3 < 50){
//         l2=5;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }

// // TEMP 

//     if (temp3 < 0){
//         l3=0;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp3 > 0 && temp3 < 10){
//         l3=10;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp3 > 10 && temp3 < 20){
//         l3=20;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp3 > 20 && temp3 < 30){
//         l3=30;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp3 > 30 && temp3 < 40){
//         l3=40;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp3 > 40 && temp3 < 50){
//         l3=50;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }

// // TEMP MAX 
    
//     if (tempmax3 < 0){
//         l4=95;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax3 > 0 && tempmax3 < 10){
//         l4=80;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax3 > 10 && tempmax3 < 20){
//         l4=60;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax3 > 20 && tempmax3 < 30){
//         l4=40;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax3 > 30 && tempmax3 < 40){
//         l4=20;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax3 > 40 && tempmax3 < 50){
//         l4=5;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
    
//   }

// //WINDSPEED

                   
// // CHICAGO
//     function determineSaturation (humidity4, windspeed4, temp4, tempmax4, tempmin4) {
//     console.log("determineSaturation");
//     //var l1 = 0;
//     if(humidity4 < 10) {
//       l1=10;
//       $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//     }
//     else if(humidity4 > 20 && humidity4 < 30){
//         l1=10;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//       // do something
//       //setColor();
//     }

//     else if(humidity4 > 30 && humidity4 < 40){
//         l1=40;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         //setColor();
//     }

//     else if(humidity4 > 40 && humidity4 < 50){
//         l1=50;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         //setColor();
//     }

//     else if(humidity4 > 50 && humidity4 < 60){
//         l1=60;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     }

//     else if(humidity4 > 70 && humidity4 < 80){
//         l1=80;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     }
//     else if(humidity4 > 80 && humidity4 < 90){
//         l1=80;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     }
//     else if(humidity4 > 90 && humidity4 < 100){
//         l1=100;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     } 

//     else if(humidity4 == 100){
//         l1=100;
//         $('.box1').css({backgroundColor: 'hsla('+h+','+s+'%,'+l1+'%, 1)'});
//         // setColor();
//     }   

// // TEMP MIN

//     if (tempmin4 < 0){
//         l2=95;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin4 > 0 && tempmin4 < 10){
//         l2=80;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin4 > 10 && tempmin4 < 20){
//         l2=60;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin4 > 20 && tempmin4 < 30){
//         l2=40;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin4 > 30 && tempmin4 < 40){
//         l2=20;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }
//     else if (tempmin4 > 40 && tempmin4 < 50){
//         l2=5;
//         $('.box2').css({backgroundColor: 'hsla('+h+','+s+'%,'+l2+'%, 1)'});
//     }

// // TEMP 

//     if (temp4 < 0){
//         l3=0;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp4 > 0 && temp4 < 10){
//         l3=10;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp4 > 10 && temp4 < 20){
//         l3=20;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp4 > 20 && temp4 < 30){
//         l3=30;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp4 > 30 && temp4 < 40){
//         l3=40;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }
//     else if (temp4 > 40 && temp4 < 50){
//         l3=50;
//         $('.box3').css({backgroundColor: 'hsla('+h+','+s+'%,'+l3+'%, 1)'});
//     }

// // TEMP MAX 
    
//     if (tempmax4 < 0){
//         l4=95;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax4 > 0 && tempmax4 < 10){
//         l4=80;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax4 > 10 && tempmax4 < 20){
//         l4=60;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax4 > 20 && tempmax4 < 30){
//         l4=40;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax4 > 30 && tempmax4 < 40){
//         l4=20;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
//     else if (tempmax4 > 40 && tempmax4 < 50){
//         l4=5;
//         $('.box4').css({backgroundColor: 'hsla('+h+','+s+'%,'+l4+'%, 1)'});
//     }
    
//   }

// //WINDSPEED









//RIO

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3451189&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation1();
            $('.rio').click(function () {

                // $('.box1').append('humidity: ' + humidity);
                // $('.box2').append('tempmin: ' + tempmin);       
                // $('.box3').append('temp: ' + temp);
                // $('.box4').append('tempmax: ' + tempmax);
                // $('.box5').append('windspeed: ' + windspeed);


                $('.box1').append(humidity);
                $('.box2').append(tempmin);       
                $('.box3').append(temp);
                $('.box4').append(tempmax);
                $('.box5').append(windspeed);
                // $(this).toggleClass("expanded");
                // $(".boxes").empty();

                console.log("Rio clicked");
                //generateColor();
                h = 226;
                //generateShade();
                //setColor();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                console.log(temp);
                console.log(humidity);
                console.log(windspeed);
                console.log(tempmin);
                console.log(tempmax);
            });

        }
    });

//NYC 


    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128638&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed2 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin2 = results.main.temp_min;
            tempmax2 = results.main.temp_max;
            temp2 = results.main.temp;
            pressure = results.main.pressure;
            humidity2 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation2();
            $('.ny').click(function () {
                console.log("NYC clicked");
                h=360;
                // generateColor();
                // generateShade();
                determineSaturation(humidity2, windspeed2, temp2, tempmin2, tempmax2);
                // setColor();
                console.log(temp2);
                console.log(humidity2);
                console.log(windspeed2);
                console.log(tempmin2);
                console.log(tempmax2);

                $('.box1').append(humidity2);
                $('.box2').append(tempmin2);       
                $('.box3').append(temp2);
                $('.box4').append(tempmax2);
                $('.box5').append(windspeed2);

            });

        }
    });  

//SP 
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3448433&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed3 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin3 = results.main.temp_min;
            tempmax3 = results.main.temp_max;
            temp3 = results.main.temp;
            pressure = results.main.pressure;
            humidity3 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation3();
            $('.sp').click(function () {
                console.log("SP clicked");
                h = 139;
                // generateColor();
                // generateShade();
                determineSaturation(humidity3, windspeed3, temp3, tempmin3, tempmax3);
                // setColor();

                $('.box1').append(humidity3);
                $('.box2').append(tempmin3);       
                $('.box3').append(temp3);
                $('.box4').append(tempmax3);
                $('.box5').append(windspeed3);
            });
        }
    });  

// CHICAGO
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=4887442&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed4 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin4 = results.main.temp_min;
            tempmax4 = results.main.temp_max;
            temp4 = results.main.temp;
            pressure = results.main.pressure;
            humidity4 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation4();
            $('.ccg').click(function () {
                console.log("Chicago clicked");
                h = 287;
                // generateColor();
                // generateShade();
                determineSaturation(humidity4, windspeed4, temp4, tempmin4, tempmax4);
                // setColor();

                $('.box1').append(humidity4);
                $('.box2').append(tempmin4);       
                $('.box3').append(temp4);
                $('.box4').append(tempmax4);
                $('.box5').append(windspeed4);
            });

        }
    });    
 
//CARTAGENA

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3896433&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed5 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin5 = results.main.temp_min;
            tempmax5 = results.main.temp_max;
            temp5 = results.main.temp;
            pressure = results.main.pressure;
            humidity5 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation5();
            $('.ctg').click(function () {
                console.log("Cartagena clicked");
                h = 167;
                // generateColor();
                // generateShade();
                determineSaturation(humidity5, windspeed5, temp5, tempmin5, tempmax5);
                // setColor();

                $('.box1').append(humidity5);
                $('.box2').append(tempmin5);       
                $('.box3').append(temp5);
                $('.box4').append(tempmax5);
                $('.box5').append(windspeed5);
            });
        }
    });

//LONDON

     $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed6 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin6 = results.main.temp_min;
            tempmax6 = results.main.temp_max;
            temp6 = results.main.temp;
            pressure = results.main.pressure;
            humidity6 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation6();
            $('.ldn').click(function () {
                console.log("London clicked");
                h = 253;
                // generateColor();
                // generateShade();
                determineSaturation(humidity6, windspeed6, temp6, tempmin6, tempmax6);
                // setColor();

                $('.box1').append(humidity6);
                $('.box2').append(tempmin6);       
                $('.box3').append(temp6);
                $('.box4').append(tempmax6);
                $('.box5').append(windspeed6);
            });


        }
    });

//TOKYO

     $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1850144&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed7 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin7 = results.main.temp_min;
            tempmax7 = results.main.temp_max;
            temp7 = results.main.temp;
            pressure = results.main.pressure;
            humidity7 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation7();
            $('.tky').click(function () {
                console.log("Tokyo clicked");
                h = 326;
                // generateColor();
                // generateShade();
                determineSaturation(humidity7, windspeed7, temp7, tempmin7, tempmax7);
                // setColor();

                $('.box1').append(humidity7);
                $('.box2').append(tempmin7);       
                $('.box3').append(temp7);
                $('.box4').append(tempmax7);
                $('.box5').append(windspeed7);
            });


        }
    });

//PARIS

     $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2988506&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed8 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin8 = results.main.temp_min;
            tempmax8 = results.main.temp_max;
            temp8 = results.main.temp;
            pressure = results.main.pressure;
            humidity8 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation8();
            $('.paris').click(function () {
                console.log("Paris clicked");
                h = 233;
                // generateColor();
                // generateShade();
                determineSaturation(humidity8, windspeed8, temp8, tempmin8, tempmax8);
                // setColor();

                $('.box1').append(humidity8);
                $('.box2').append(tempmin8);       
                $('.box3').append(temp8);
                $('.box4').append(tempmax8);
                $('.box5').append(windspeed8);
            });


        }
    });

//BARCELONA

     $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=6356055&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed9 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin9 = results.main.temp_min;
            tempmax9 = results.main.temp_max;
            temp9 = results.main.temp;
            pressure = results.main.pressure;
            humidity9 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation9();
            $('.barcelona').click(function () {
                console.log("Barcelona clicked");
                h = 60;
                // generateColor();
                // generateShade();
                determineSaturation(humidity9, windspeed9, temp9, tempmin9, tempmax9);
                // setColor();

                $('.box1').append(humidity9);
                $('.box2').append(tempmin9);       
                $('.box3').append(temp9);
                $('.box4').append(tempmax9);
                $('.box5').append(windspeed9);
            });


        }
    });

//MELBOURNE

     $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=7839805&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed10 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin10 = results.main.temp_min;
            tempmax10 = results.main.temp_max;
            temp10 = results.main.temp;
            pressure = results.main.pressure;
            humidity10 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation10();
            $('.melbourne').click(function () {
                console.log("Melbourne clicked");
                h = 36;
                // generateColor();
                // generateShade();
                determineSaturation(humidity10, windspeed10, temp10, tempmin10, tempmax10);
                // setColor();

                $('.box1').append(humidity10);
                $('.box2').append(tempmin10);       
                $('.box3').append(temp10);
                $('.box4').append(tempmax10);
                $('.box5').append(windspeed10);
            });


        }
    });

//HELSINKI

     $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=658226&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed11 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin11 = results.main.temp_min;
            tempmax11 = results.main.temp_max;
            temp11 = results.main.temp;
            pressure = results.main.pressure;
            humidity11 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation11();
            $('.helsinki').click(function () {
                console.log("Helsinki clicked");
                h = 5;
                // generateColor();
                // generateShade();
                determineSaturation(humidity11, windspeed11, temp11, tempmin11, tempmax11);
                // setColor();

                $('.box1').append(humidity11);
                $('.box2').append(tempmin11);       
                $('.box3').append(temp11);
                $('.box4').append(tempmax11);
                $('.box5').append(windspeed11);
            });


        }
    });

//SAN DIEGO

     $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5391832&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed12 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin12 = results.main.temp_min;
            tempmax12 = results.main.temp_max;
            temp12 = results.main.temp;
            pressure = results.main.pressure;
            humidity12 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation12();
            $('.sd').click(function () {
                console.log("San Diego clicked");
                h = 197;
                // generateColor();
                // generateShade();
                determineSaturation(humidity12, windspeed12, temp12, tempmin12, tempmax12);
                // setColor();

                $('.box1').append(humidity12);
                $('.box2').append(tempmin12);       
                $('.box3').append(temp12);
                $('.box4').append(tempmax12);
                $('.box5').append(windspeed12);
            });


        }
    });

//REYKJAVIK

     $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=6692263&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed13 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin13 = results.main.temp_min;
            tempmax13 = results.main.temp_max;
            temp13 = results.main.temp;
            pressure = results.main.pressure;
            humidity13 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation13();
            $('.rekj').click(function () {
                console.log("Rekjavik clicked");
                h = 179;
                // generateColor();
                // generateShade();
                determineSaturation(humidity13, windspeed13, temp13, tempmin13, tempmax13);
                // setColor();

                $('.box1').append(humidity13);
                $('.box2').append(tempmin13);       
                $('.box3').append(temp13);
                $('.box4').append(tempmax13);
                $('.box5').append(windspeed13);
            });


        }
    });

//BUENOS AIRES

     $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3435910&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed14 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin14 = results.main.temp_min;
            tempmax14 = results.main.temp_max;
            temp14 = results.main.temp;
            pressure = results.main.pressure;
            humidity14 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation14();
            $('.ba').click(function () {
                console.log("Buenos Aires clicked");
                h = 122;
                // generateColor();
                // generateShade();
                determineSaturation(humidity14, windspeed14, temp14, tempmin14, tempmax14);
                // setColor();

                $('.box1').append(humidity14);
                $('.box2').append(tempmin14);       
                $('.box3').append(temp14);
                $('.box4').append(tempmax14);
                $('.box5').append(windspeed14);
            });


        }
    });

//JOHANNESBURG

     $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3435910&units=metric&APPID=1059b5018dfa7be2dda325bff19c3c6c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed15 = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin15 = results.main.temp_min;
            tempmax15 = results.main.temp_max;
            temp15 = results.main.temp;
            pressure = results.main.pressure;
            humidity15 = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation15();
            $('.jb').click(function () {
                console.log("Johannesburg clicked");
                h = 48;
                // generateColor();
                // generateShade();
                determineSaturation(humidity15, windspeed15, temp15, tempmin15, tempmax15);
                // setColor();

                $('.box1').append(humidity15);
                $('.box2').append(tempmin15);       
                $('.box3').append(temp15);
                $('.box4').append(tempmax15);
                $('.box5').append(windspeed15);
            });


        }
    });




//Weather interpretation

//RIO   
    function myWeatherInterpretation1(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS            
        //JUST SEEING IF THE VALUES COME THROUGH

        // $('.rio').click(function() {
        //     $('.box1').append(humidity);
        //     $('.box2').append(tempmin);       
        //     $('.box3').append(temp);
        //     $('.box4').append(tempmax);
        //     $('.box5').append(windspeed);
        //     // $(this).toggleClass("expanded");
        //     $(".boxes").empty();

        //     $('.box1').append(humidity);
        //         $('.box2').append(tempmin);       
        //         $('.box3').append(temp);
        //         $('.box4').append(tempmax);
        //         $('.box5').append(windspeed);
        // }

        


        // if (temp > 17 && temp < 20) {
        // 	$('.box1').addClass('rio17-20');
        // }
        // if (temp > 20 && temp < 25) {
        // 	$('.box1').addClass('rio20-24')
        // }
        // if (temp > 25 && temp < 30) {
        // 	$('.box1').addClass('rio25-30')
        // }
        // if (temp > 30 && temp < 35) {
        // 	$('.box1').addClass('rio30-35')
        // }




        
    } 



//NYC
    function myWeatherInterpretation2(){
        
    	// $('p').html('temp NYC: ' + temp);
        // $('p').append('humidity: ' + humidity);

        // if (temp > 0 && temp < 30){
        // 	$('.box2').addClass('nyc9-13');
        // }
        
    }

// SP

    function myWeatherInterpretation3(){

    	// $('p').append('temp SP: ' + temp);
     //    $('p').append('humidity: ' + humidity);
        
    	// if (temp > 20 && temp < 25) {
    	// 	$('.box3').addClass('sp20-25')
    	// }

    	// if (temp > 25 && temp < 30) {
    	// 	$('.box3').addClass('sp25-30')
    	// }
        
    }

 // CHICAGO

    function myWeatherInterpretation4(){

    	// $('p').append('temp CHICAGO: ' + temp);   
        // $('p').append('humidity: ' + humidity);

    	// if (temp > 5 && temp < 10){
    	// 	$('.box4').addClass('ccg5-10')
    	// }

    	// if (temp > 10 && temp < 15) {
    	// 	$('.box4').addClass('ccg10-15');
    	// }

    	// if (temp > 15 && temp < 20) {
    	// 	$('.box4').addClass('ccg15-20');
    	// }
        
    }

//CARTAGENA 

    function myWeatherInterpretation5(){

    	// $('p').append('temp CTG: ' + temp);
        // $('p').append('humidity: ' + humidity);
        
    	// if (temp > 10 && temp < 15) {
    	// 	$('.box5').addClass('ctg10-15');
    	// }

    	// if (temp > 15 && temp < 20) {
    	// 	$('.box5').addClass('ctg15-20');
    	// }

    	// if (temp > 20 && temp < 30) {
    	// 	$('.box5').addClass('ctg20-30');
    	// }
        
    }

// LONDON

    function myWeatherInterpretation6(){
        
        // $('p').append('temp LND: ' + temp); 
        // $('p').append('humidity: ' + humidity);
        
    }

    function myWeatherInterpretation7(){
        
        // $('p').append('temp LND: ' + temp); 
        // $('p').append('humidity: ' + humidity);
        
    }
    function myWeatherInterpretation8(){
        
        // $('p').append('temp LND: ' + temp); 
        // $('p').append('humidity: ' + humidity);
        
    }
    function myWeatherInterpretation9(){
        
        // $('p').append('temp LND: ' + temp); 
        // $('p').append('humidity: ' + humidity);
        
    }
    function myWeatherInterpretation10(){
        
        // $('p').append('temp LND: ' + temp); 
        // $('p').append('humidity: ' + humidity);
        
    }
    function myWeatherInterpretation11(){
        
        // $('p').append('temp LND: ' + temp); 
        // $('p').append('humidity: ' + humidity);
        
    }
    function myWeatherInterpretation12(){
        
        // $('p').append('temp LND: ' + temp); 
        // $('p').append('humidity: ' + humidity);
        
    }
    function myWeatherInterpretation13(){
        
        // $('p').append('temp LND: ' + temp); 
        // $('p').append('humidity: ' + humidity);
        
    }
    function myWeatherInterpretation14(){
        
        // $('p').append('temp LND: ' + temp); 
        // $('p').append('humidity: ' + humidity);
        
    }
    function myWeatherInterpretation15(){
        
        // $('p').append('temp LND: ' + temp); 
        // $('p').append('humidity: ' + humidity);
        
    }
   

});















