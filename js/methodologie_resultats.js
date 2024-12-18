$(document).ready(function () {
  toogle_section = $(".card-header");
  toogle_section.on("click", function () {
    toogle_section.find(".btn span").addClass("show");
  });
});
