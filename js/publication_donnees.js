$(document).ready(function () {
  // TOGGLE FOR CARD HEADER (toggle collapsible sections)
  $(".card-header").on("click", function () {
    var content = $(this).next(".collapse");  // Get the collapsible content that follows the card header
    var btnSpan = $(this).find("button span");  // Get the span inside the button (to toggle + / -)

    // Toggle the visibility of the collapsible content
    content.toggleClass("show");  // This will toggle the 'show' class to expand/collapse the section

    // Toggle the hide class on the span element for the + / - icon
    if (content.hasClass("show")) {
      btnSpan.addClass("hide");  // Show "-" when expanded
    } else {
      btnSpan.removeClass("hide");  // Show "+" when collapsed
    }
  });

  // Initialize all sections to be collapsed with the correct + icon
  $(".card-header").each(function() {
    var content = $(this).next(".collapse");
    var btnSpan = $(this).find("button span");

    // Make sure the icon is "+" for collapsed sections (add the hide class only for expanded sections)
    if (!content.hasClass("show")) {
      btnSpan.removeClass("hide");
    } else {
      btnSpan.addClass("hide");
    }
  });
});
