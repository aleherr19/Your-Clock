// Provides a simple clock with built-in DOM manipulation


// Set the time of the clock
function updateClockTick() {
  var $clockComponent = $("#clockTime");

  var mDate = new Date();

  var hour = mDate.getHours();
  var minute = mDate.getMinutes();
  var second = mDate.getSeconds();

  // Adjustments made by script.adjustment.js
  // By default it is military time
  // 
  if (currentClockSetting == ADJUSTMENT_CLOCK_USE_12_HOUR) {
    if (hour > 12 && minute > 59) {
      hour -= 12;
    }
  }

  // Update the clock text
  $clockComponent.text(zeroPad(hour) + ":" + zeroPad(minute) + ":" + zeroPad(second));
}


// Thanks for the slice idea https://stackoverflow.com/questions/18889548/javascript-change-gethours-to-2-digit
// Add leading zeros to numbers,
// returns a string
function zeroPad(num) {
  return ("0" + num).slice(-2);
}

