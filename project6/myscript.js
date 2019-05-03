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

// WINSPEED

    
  }

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

                $('.box1').append('humidity: ' + humidity);
                $('.box2').append('tempmin: ' + tempmin);       
                $('.box3').append('temp: ' + temp);
                $('.box4').append('tempmax: ' + tempmax);
                $('.box5').append('windspeed: ' + windspeed);

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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation2();
            $('.ny').click(function () {
                console.log("NYC clicked");
                h=360;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation3();
            $('.sp').click(function () {
                console.log("SP clicked");
                h = 139;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation4();
            $('.ccg').click(function () {
                console.log("Chicago clicked");
                h = 287;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation5();
            $('.ctg').click(function () {
                console.log("Cartagena clicked");
                h = 167;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation6();
            $('.ldn').click(function () {
                console.log("London clicked");
                h = 253;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation7();
            $('.tky').click(function () {
                console.log("Tokyo clicked");
                h = 326;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation8();
            $('.paris').click(function () {
                console.log("Paris clicked");
                h = 233;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation9();
            $('.barcelona').click(function () {
                console.log("Barcelona clicked");
                h = 60;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation10();
            $('.melbourne').click(function () {
                console.log("Melbourne clicked");
                h = 36;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation11();
            $('.helsinki').click(function () {
                console.log("Helsinki clicked");
                h = 5;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation12();
            $('.sd').click(function () {
                console.log("San Diego clicked");
                h = 197;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation13();
            $('.rekj').click(function () {
                console.log("Rekjavik clicked");
                h = 179;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation14();
            $('.ba').click(function () {
                console.log("Buenos Aires clicked");
                h = 122;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
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
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation15();
            $('.jb').click(function () {
                console.log("Johannesburg clicked");
                h = 48;
                // generateColor();
                // generateShade();
                determineSaturation(humidity, windspeed, temp, tempmin, tempmax);
                // setColor();
            });


        }
    });


//RIO   
    function myWeatherInterpretation1(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS            
        //JUST SEEING IF THE VALUES COME THROUGH

        $('.rio').click(function() {
            $('.box1').append('humidity: ' + humidity);
            $('.box2').append('tempmin: ' + tempmin);       
            $('.box3').append('temp: ' + temp);
            $('.box4').append('tempmax: ' + tempmax);
            $('.box5').append('windspeed: ' + windspeed);
            // $(this).toggleClass("expanded");
            $(".boxes").empty();
        })

        


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















