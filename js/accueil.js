$(document).ready(function () {
  bindHoverEffects("#frugacite-accronym span", "#frugacite-definition span");

  // Select all map sliders
  $(".map_slider").each(function () {
    const slider = $(this); // Current slider instance

    slider.find(".hoverer").on("mouseenter", function () {
      slider.find(".map-bottom-div").addClass("show");
    });
    slider.find(".hoverer").on("mouseleave", function () {
      slider.find(".map-bottom-div").removeClass("show");
    });

    // Click event for the right button
    slider.find(".map-right-button").on("click", function () {
      // Slide in the sliding div for the current slider
      slider.find(".map-sliding-div").toggleClass("show");
      slider.find(".map-right-button span").toggleClass("show");
    });

    //Map list slider
    var $sliders = $(".map_slider");
    var $prevBtn = $("#prevBtn");
    var $nextBtn = $("#nextBtn");

    var currentIndex = 0; // Start with the first slider

    // Initially hide all and show the first
    $sliders.hide().eq(currentIndex).show();
    updateButtonState();

    function showSlider(index) {
      $sliders.stop(true, true).fadeOut(300);
      $sliders
        .eq(index)
        .stop(true, true)
        .fadeIn(300, function () {
          updateButtonState();
        });
    }

    function updateButtonState() {
      // If we are at the first slider, disable "Previous"
      if (currentIndex === 0) {
        $prevBtn.addClass("disabled");
      } else {
        $prevBtn.removeClass("disabled");
      }

      // If we are at the last slider, disable "Next"
      if (currentIndex === $sliders.length - 1) {
        $nextBtn.addClass("disabled");
      } else {
        $nextBtn.removeClass("disabled");
      }
    }

    $prevBtn.click(function () {
      if (currentIndex > 0) {
        currentIndex--;
        showSlider(currentIndex);
      }
    });

    $nextBtn.click(function () {
      if (currentIndex < $sliders.length - 1) {
        currentIndex++;
        showSlider(currentIndex);
      }
    });
  });
});
