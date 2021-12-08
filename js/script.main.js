
// The initial start of the whole program
$(document).ready(function() {

  // Once this script is loaded, call the other clock
  // script that the DOM can be manipulated
  pageIsReady();

  // Create a repeatable ticker object which calls upon
  // other objects
  initTicker();

});


// The ticker that calls other functions
// that may want to update/refresh every second
function initTicker() {

  var interval = setInterval(function() {
     // Call tick function
     onTick();
  }, 1000);


}