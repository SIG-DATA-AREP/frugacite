$(document).ready(function () {
  // TOGGLE FOR CARD HEADER (toggle collapsible sections)
  $(".card-header").on("click", function () {
    var content = $(this).next(".collapse");  // Get the collapsible content that follows the card header
    var btnSpan = $(this).find(".btn span");  // Get the span inside the button (to toggle + / -)

    // Toggle the visibility of the collapsible content
    content.toggleClass("show");  // This will toggle the 'show' class to expand/collapse the section

    // Toggle the + / - icon based on visibility
    if (content.hasClass("show")) {
      btnSpan.text("-");  // Show "-" when expanded
    } else {
      btnSpan.text("+");  // Show "+" when collapsed
    }
  });

  // Set initial state (optional)
  $(".card-header").each(function() {
    var content = $(this).next(".collapse");
    var btnSpan = $(this).find(".btn span");

    if (!content.hasClass("show")) {
      btnSpan.text("+");  // Make sure the icon is "+" for collapsed sections
    }
  });
});
