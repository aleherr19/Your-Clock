// Provides a simple clock with built-in DOM manipulation

// When a tick is produced
function onTick() {
  var date = new Date();

  setClockTime(date);
}


// Set the time of the clock
function setClockTime(mDate) {
  var $clockComponent = $("#clockTime");

  var hour = mDate.getHours() - 12;
  var minute = mDate.getMinutes();
  var second = mDate.getSeconds();

  $clockComponent.text(zeroPad(hour) + ":" + zeroPad(minute) + ":" + zeroPad(second));
}


// Thanks for the slice idea https://stackoverflow.com/questions/18889548/javascript-change-gethours-to-2-digit
// Add leading zeros to numbers,
// returns a string
function zeroPad(num) {
  return ("0" + num).slice(-2);
}

