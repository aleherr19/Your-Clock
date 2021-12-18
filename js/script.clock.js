
function initClock() {

  setInterval( () => {
    prepareClockRender();
  }, 1000);

}


function prepareClockRender() {

  var clockDate = new Date();
  var clockHour = clockDate.getHours();
  var clockMinute = clockDate.getMinutes();


  if (!Settings.prefersMilitaryTime) {
    if (clockHour > 12) {
      clockHour -= 12;
    }
  }

  renderClockTime(clockHour, clockMinute);
}


function renderClockTime(hour, minute) {

  var $clockComponent = $("#clockTime");

  if (Settings.clockOrientation == ClockOrientation.HORIZONTAL) {
     // Remove padding by clock when horizontal
     $clockComponent.parent().css("marginTop", "");

     $clockComponent.text(zeroPad(hour) + ":" + zeroPad(minute));
  } else if (Settings.clockOrientation == ClockOrientation.VERTICAL) {
    // Add padding by clock when vertical
    $clockComponent.parent().css("marginTop", "1.5rem");

    $clockComponent.html(zeroPad(hour) + "<br>" + zeroPad(minute));
  }
}


// Thanks for the slice idea https://stackoverflow.com/questions/18889548/javascript-change-gethours-to-2-digit
function zeroPad(num) {
  return ("0" + num).slice(-2);
}

