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
    });
  });
});
