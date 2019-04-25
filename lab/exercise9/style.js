


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);

  if (s == 16) {
    $('body').addClass('purple');
    } else if (s == 17) {
        $('body').addClass('blue');
    } else if (s == 18) {
        $('body').addClass('green')
    } else if (s == 19) {
        $('body').addClass('yellow')
    } else if (s == 20) {
        $('body').addClass('orange')
    } else if (s == 21) {
        $('body').addClass('red')
    } else if (s == 22) {
      $('body').addClass('purple');
    } else if (s == 23) {
        $('body').addClass('blue');
    } else if (s == 24) {
        $('body').addClass('green');
    } else if (s == 25) {
        $('body').addClass('yellow');
    } else if (s == 26) {
        $('body').addClass('orange');
    } else if (s == 27) {
        $('body').addClass('red');
    } else if (s == 28) {
        $('body').addClass('white');
    }

    if (h == 1) {
      $('body').addClass('purple');
    } else if (h == 2) {
        $('body').addClass('blue');
    } else if (h == 3) {
        $('body').addClass('green')
    } else if (h == 4) {
        $('body').addClass('yellow')
    } else if (h == 5) {
        $('body').addClass('orange')
    } else if (h == 6) {
        $('body').addClass('red')
    } else if (h == 7) {
        $('body').addClass('purple');
    } else if (h == 8) {
        $('body').addClass('blue');
    } else if (h == 9) {
        $('body').addClass('green');
    } else if (h == 10) {
        $('body').addClass('yellow');
    } else if (h == 11) {
        $('body').addClass('orange');
    } else if (h == 12) {
        $('body').addClass('red');
    } else if (h == 13) {
        $('body').addClass('purple');
    } else if (h == 14) {
        $('body').addClass('blue');
    } else if (h == 15) {
        $('body').addClass('green');
    } else if (h == 16) {
        $('body').addClass('yellow');
    } else if (h == 17) {
        $('body').addClass('orange');
    } else if (h == 18) {
        $('body').addClass('red');
    } else if (h == 19)
        $('body').addClass('purple');
    } else if (h == 20) {
        $('body').addClass('blue');
    } else if (h == 21) {
        $('body').addClass('green');
    } else if (h == 22) {
        $('body').addClass('yellow');
    } else if (h == 23) {
        $('body').addClass('orange');
    } else if (h == 24) {
        $('body').addClass('red');
    } 


}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}









