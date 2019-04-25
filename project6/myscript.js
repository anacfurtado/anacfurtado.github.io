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


$(document).ready(function(){
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

        }
    });

//RIO   
    function myWeatherInterpretation1(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS            
        //JUST SEEING IF THE VALUES COME THROUGH
        // $('p').append('windspeed: ' + windspeed);
        
        // $('p').append('temp RIO: ' + temp);       
        // $('p').append('humidity: ' + humidity);
       

        if (temp > 17 && temp < 20) {
        	$('.box1').addClass('rio17-20');
        }

        if (temp > 20 && temp < 25) {
        	$('.box1').addClass('rio20-24')
        }

        if (temp > 25 && temp < 30) {
        	$('.box1').addClass('rio25-30')
        }

        if (temp > 30 && temp < 35) {
        	$('.box1').addClass('rio30-35')
        }
        
    } 



//NYC
    function myWeatherInterpretation2(){
        
    	// $('p').html('temp NYC: ' + temp);
        // $('p').append('humidity: ' + humidity);

        if (temp > 0 && temp < 30){
        	$('.box2').addClass('nyc9-13');
        }
        
    }

// SP

    function myWeatherInterpretation3(){

    	// $('p').append('temp SP: ' + temp);
        // $('p').append('humidity: ' + humidity);
        
    	if (temp > 20 && temp < 25) {
    		$('.box3').addClass('sp20-25')
    	}

    	if (temp > 25 && temp < 30) {
    		$('.box3').addClass('sp25-30')
    	}
        
    }

 // CHICAGO

    function myWeatherInterpretation4(){

    	// $('p').append('temp CHICAGO: ' + temp);   
        // $('p').append('humidity: ' + humidity);

    	if (temp > 5 && temp < 10){
    		$('.box4').addClass('ccg5-10')
    	}

    	if (temp > 10 && temp < 15) {
    		$('.box4').addClass('ccg10-15');
    	}

    	if (temp > 15 && temp < 20) {
    		$('.box4').addClass('ccg15-20');
    	}
        
    }

//CARTAGENA 

    function myWeatherInterpretation5(){

    	// $('p').append('temp CTG: ' + temp);
        // $('p').append('humidity: ' + humidity);
        
    	if (temp > 10 && temp < 15) {
    		$('.box5').addClass('ctg10-15');
    	}

    	if (temp > 15 && temp < 20) {
    		$('.box5').addClass('ctg15-20');
    	}

    	if (temp > 20 && temp < 30) {
    		$('.box5').addClass('ctg20-30');
    	}
        
    }

// LONDON

    function myWeatherInterpretation6(){
        
        // $('p').append('temp LND: ' + temp); 
        // $('p').append('humidity: ' + humidity);
        
    }

});















