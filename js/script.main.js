
// The initial start of the whole program
$(document).ready(function() {

  // Once this script is loaded, call the other clock
  // script that the DOM can be manipulated
  pageIsReady();

  // Create a repeatable ticker object which calls upon
  // other objects
  var interval = setInterval(function() {
    // Call tick function
    updateClockTick();
    
  }, 1000);

});


