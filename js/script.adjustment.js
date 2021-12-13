// This script is responsible for adjusting the page content dynamically
// based on what the user prefered



const ADJUSTMENT_CLOCK_USE_12_HOUR = 0;
const ADJUSTMENT_CLOCK_USE_24_HOUR = 1;
var currentClockSetting = 0;

const THEME_DAY = 0;
const THEME_NIGHT = 1;
const THEME_AUTO = 2;

var currentThemeSetting = 0;
var watchTheme = window.matchMedia("(prefers-color-scheme: dark)");


const ADJUSTMENT_ORIENTATION_HORIZONTAL = 0;
const ADJUSTMENT_ORIENTATION_VERTICAL = 1;
var currentOrientationSetting = ADJUSTMENT_ORIENTATION_HORIZONTAL;



// Initiator of this script
function pageIsReady() {

  
  // Buttons
  var $btnAdjust = $("#btnAdjustOpen");
  var $btnAdjustClose = $("#btnAdjustClose");
  var $adjustContainer = $("#adjustmentContainer");

  $btnAdjust.click(function() {
    // Show the adjustment pane & hide this button
    $btnAdjust.hide();
    
    $adjustContainer.animate({
      right: "18rem"
    }, 200, "swing");
  });

  $btnAdjustClose.click(function() {
    // Hide the adjustment pane & show this button
    $btnAdjust.show();

    $adjustContainer.animate({
      right: 0
    }, 200, "swing");

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
      $inputGroupTime.parent().removeClass("active");

      // Highlight this element
      thisElement.parent().addClass("active");
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

        if (currentThemeSetting != index) {
          currentThemeSetting = index;

          // Remove the css highlight on any of the elements
          $inputGroupTheme.parent().removeClass("active");
    
          // Highlight this element
          thisElement.parent().addClass("active");
          
          // Updates the UI to a dark or light theme
          themeOptions(index);
        }

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
        $inputGroupOrientation.parent().removeClass("active");
  
        // Highlight this element
        thisElement.parent().addClass("active");

      });
    });

}





function themeOptions(selectedIndex){

  if (selectedIndex == THEME_DAY) {
    watchTheme.removeEventListener("change", windowThemeChanged);
    applyTheme("day");
  } else if (selectedIndex == THEME_NIGHT) {
    watchTheme.removeEventListener("change", windowThemeChanged);
    applyTheme("night");
  } else if (selectedIndex == THEME_AUTO) {
    // Register an event listener.
    // Call an event when the host system's theme changes
    windowThemeChanged(watchTheme);
    watchTheme.addEventListener("change", windowThemeChanged);
  }


}


// Called when the host system theme is changed
function windowThemeChanged(e){
  const newTheme = e.matches ? "dark" : "light";

  if (newTheme == "dark") {
    applyTheme("night");
  } else if (newTheme == "light") {
    applyTheme("day");
  }

}



// Applies a "day" or "night" theme to the website
// based on the input string
function applyTheme(themeString){
    // Grab all the elements that require changing
    // remove the classes and then add the classes with the specified
    // "day" or "night" string
    $("body").removeClass().addClass("body-theme-" + themeString);
    $("#clockContainer").removeClass().addClass("clockContainer-theme-" + themeString);
    $("#clockTime").removeClass().addClass("clockTime-theme-" + themeString);
    $("#adjustmentContainer").removeClass().addClass("adjustment-theme-" + themeString);
}
