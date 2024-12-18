$(document).ready(function () {
  // TOOGLE FOR CARD HEADER
  $(".card-header").on("click", function () {
    if ($(this).find(".btn span").hasClass("show"))
      $(this).find(".btn span").removeClass("show");
    else $(this).find(".btn span").addClass("show");
  });
});
