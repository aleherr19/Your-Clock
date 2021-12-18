
// Object literal used for applying themes to the whole website
const Theme = {
  THEME_LIGHT: 0,
  THEME_DARK: 1,
  THEME_AUTO: 2,
  ThemeListener: window.matchMedia("(prefers-color-scheme: dark)"),

  applyTheme: function(intTheme) {
    if (intTheme == this.THEME_LIGHT) {
      this.colorComponents("light")
    } else if (intTheme == this.THEME_DARK) {
      this.colorComponents("dark")
    } else if (intTheme == this.THEME_AUTO) {
      // TODO: It registers, but doesn't get removed
      this.ThemeListener.addEventListener("change", themeListenerHandler = (e) => {
        var systemTheme = e.matches ? "dark" : "light";
        this.colorComponents(systemTheme);
      });}
  },

  colorComponents: function(themeString) {
    $("body").removeClass().addClass("body-theme-" + themeString);
    $("#clockContainer").removeClass().addClass("clockContainer-theme-" + themeString);
    $("#clockTime").removeClass().addClass("clockTime-theme-" + themeString);
    $("#adjustmentContainer").removeClass().addClass("adjustment-theme-" + themeString);
  },

};


const ClockOrientation = {
  HORIZONTAL: 0,
  VERTICAL: 1
};


const Settings = {
  prefersMilitaryTime: false,
  clockOrientation: ClockOrientation.HORIZONTAL
};


// Initiator of this script
function initAdjustmentPanel() {

  var $buttonAdjustmentsOpen = $("#btnAdjustOpen");
  var $buttonAdjustmentsClose = $("#btnAdjustClose");
  var $adjustmentContainer = $("#adjustmentContainer");

  $buttonAdjustmentsOpen.click(function() {
    $buttonAdjustmentsOpen.hide();
    $adjustmentContainer.animate({
      right: "18rem"
    }, 200, "swing");
  });

  $buttonAdjustmentsClose.click(function() {
    $buttonAdjustmentsOpen.show();
    $adjustmentContainer.animate({
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
      Settings.prefersMilitaryTime = index;

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

        if (Settings.Theme != index) {
          Theme.applyTheme(index);

          // Remove the css highlight on any of the elements
          $inputGroupTheme.parent().removeClass("active");
    
          // Highlight this element
          thisElement.parent().addClass("active");
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