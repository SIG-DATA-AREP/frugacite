$(document).ready(function () {
  // Set up the initial state for the icons on page load
  $(".card-header .btn span").each(function() {
    var content = $(this).closest(".card-header").next(".collapse");
    if (!content.hasClass("show")) {
      $(this).text("+");
    }
  });

  // Listen for the Bootstrap collapse events to change the icon
  $(".btn[data-bs-toggle='collapse']").on("click", function () {
    var content = $($(this).attr("data-bs-target"));  // Get the collapsible content
    var btnSpan = $(this).find("span");  // Get the span inside the button (to toggle + / -)

    // Check the collapse state and toggle the icon
    if (content.hasClass("show")) {
      btnSpan.text("-");  // Show "-" when expanded
    } else {
      btnSpan.text("+");  // Show "+" when collapsed
    }
  });
});
