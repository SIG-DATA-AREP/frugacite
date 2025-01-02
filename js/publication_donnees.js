$(document).ready(function () {
  // TOGGLE FOR CARD HEADER
  $(".card-header").on("click", function () {
    var span = $(this).find(".btn span"); // Get the span inside the button

    // Check if the collapse content is currently expanded
    if ($(this).next(".collapse").hasClass("show")) {
      // If expanded, add the 'hide' class to show the "-" symbol
      span.addClass("hide");
    } else {
      // If collapsed, remove the 'hide' class to show the "+" symbol
      span.removeClass("hide");
    }
  });

  // Initialize all sections to be collapsed with the "+" symbol
  $(".card-header").each(function() {
    var span = $(this).find(".btn span");  // Get the span inside the button
    var content = $(this).next(".collapse");

    // Make sure the icon is "+" for collapsed sections
    if (!content.hasClass("show")) {
      span.removeClass("hide");  // "+" when collapsed
    } else {
      span.addClass("hide");  // "-" when expanded
    }
  });
});
