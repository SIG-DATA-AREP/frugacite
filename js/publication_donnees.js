$(document).ready(function () {
  // TOGGLE FOR CARD HEADER (toggle collapsible sections)
  $(".btn[data-bs-toggle='collapse']").on("click", function () {
    var content = $($(this).attr("data-bs-target"));  // Get the collapsible content
    var btnSpan = $(this).find("span");  // Get the span inside the button (to toggle + / -)

    // Toggle the + / - icon based on visibility
    if (content.hasClass("show")) {
      btnSpan.text("-");  // Show "-" when expanded
    } else {
      btnSpan.text("+");  // Show "+" when collapsed
    }
  });

  // Initialize all sections to be collapsed with the correct + icon
  $(".card-header").each(function() {
    var content = $(this).next(".collapse");
    var btnSpan = $(this).find(".btn span");

    // Make sure the icon is "+" for collapsed sections
    if (!content.hasClass("show")) {
      btnSpan.text("+");
    }
  });
});
