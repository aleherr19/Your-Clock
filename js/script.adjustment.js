
// Object literal used for applying themes to the whole website
const Theme = {

  THEME_LIGHT: 0,
  THEME_DARK: 1,
  THEME_AUTO: 2,

  ThemeListener: window.matchMedia("(prefers-color-scheme: dark)"),
  isListenerRegistered: false,
  _that: null,

  themeHandler: (e) => {
    _that.colorComponents(e.matches ? "dark" : "light");
  },


  applyTheme: function(intTheme) {
    // Context for the media query event listener function
    _that = this;

    if (this.isListenerRegistered) {
      this.isListenerRegistered = false;
      this.ThemeListener.removeEventListener("change", _that.themeHandler);
    }

    if (intTheme == this.THEME_LIGHT) {
      this.colorComponents("light")
    } else if (intTheme == this.THEME_DARK) {
      this.colorComponents("dark")
    } else if (intTheme == this.THEME_AUTO) {
      this.isListenerRegistered = true;
      this.ThemeListener.addEventListener("change", _that.themeHandler);
    }

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

  // Click events for Time Format
  radioGroupOnIndexSelected("#btnGroupTimeFormat", (clickedCallbackIndex) => {
    Settings.prefersMilitaryTime = clickedCallbackIndex;
  });

  // Click events for Theme
  radioGroupOnIndexSelected("#btnGroupTheme", (clickedCallbackIndex) => {
    Theme.applyTheme(clickedCallbackIndex);
  });

  // Click events for Orientation
  radioGroupOnIndexSelected("#btnGroupOrientation", (clickedCallbackIndex) => {
    Settings.clockOrientation = clickedCallbackIndex;
  });

}


function radioGroupOnIndexSelected(bootstrapRadioGroup, indexCallbackFunc) {

  var $radioButtonNodeList = $(bootstrapRadioGroup + " > label > input");

  $radioButtonNodeList.each((index, element) => {
    $(element).click( () => {
      indexCallbackFunc(index);

      // Bootstrap "active" HTML component styling
      $radioButtonNodeList.parent().removeClass("active");
      $(element).parent().addClass("active");

    });
  });

}