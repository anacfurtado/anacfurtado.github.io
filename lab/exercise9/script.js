


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
        $('body').addClass('white')
    }



}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}









