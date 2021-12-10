// This script is responsible for adjusting the page content dynamically
// based on what the user prefered



const ADJUSTMENT_CLOCK_USE_12_HOUR = 0;
const ADJUSTMENT_CLOCK_USE_24_HOUR = 1;
var currentClockSetting = 0;

var currentThemeSetting = 0;
var currentOrientationSetting = 0;


// Initiator of this script
function pageIsReady() {

  
  // Buttons
  var $btnAdjust = $("#btnAdjustOpen");
  var $btnAdjustClose = $("#btnAdjustClose");
  var $adjustContainer = $("#adjustmentContainer");

  $btnAdjust.click(function() {
    // Show the adjustment pane & hide this button
    $btnAdjust.hide();
    $adjustContainer.show();
  });

  $btnAdjustClose.click(function() {
    // Hide the adjustment pane & show this button
    $adjustContainer.hide();
    $btnAdjust.show();
  });

  
  // Add click listeners to each radio input. And when clicked,
  // update the corresponding option with an int value based
  // on the button index. (Taking a look at the UI will help)
  var $inputGroupTime = $("#btnGroupTimeFormat > label > input");
  // For each option in the radio group
  $inputGroupTime.each(function(index, e) {
    // Add a click listener. Set the
    // adjustment value equal to
    // the index
    // TODO: Kind of makes the CONST variable useless
    // in a sort of way
    var thisElement = $(e);

    $(e).click(function() {
      currentClockSetting = index;

      // Remove the css highlight on any of the elements
      $inputGroupTime.parents().removeClass("active");

      // Highlight this element
      thisElement.parents().addClass("active");
    });
  });

  // Find the radio group
  var $inputGroupTheme = $("#btnGroupTheme > label > input");
    // For each option in the radio group
    $inputGroupTheme.each(function(index, e) {
      // Add a click listener. Set the
      // adjustment value equal to
      // the index
      // TODO: Kind of makes the CONST variable useless
      // in a sort of way
      var thisElement = $(e);
  
      $(e).click(function() {
        currentThemeSetting = index;

        // Remove the css highlight on any of the elements
        $inputGroupTheme.parents().removeClass("active");
  
        // Highlight this element
        thisElement.parents().addClass("active");
      });
    });


  // Find the radio group
  var $inputGroupOrientation = $("#btnGroupOrientation > label > input");
    // For each option in the radio group
    $inputGroupOrientation.each(function(index, e) {
      // Add a click listener. Set the
      // adjustment value equal to
      // the index
      // TODO: Kind of makes the CONST variable useless
      // in a sort of way
      var thisElement = $(e);
  
      $(e).click(function() {
        currentOrientationSetting = index;
        
        // Remove the css highlight on any of the elements
        $inputGroupOrientation.parents().removeClass("active");
  
        // Highlight this element
        thisElement.parents().addClass("active");
      });
    });

}
