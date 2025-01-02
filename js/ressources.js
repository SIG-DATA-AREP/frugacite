  // TOOGLE FOR CARD HEADER
  $(".card-header").on("click", function () {
    if ($(this).find(".btn span").hasClass("hide"))
      $(this).find(".btn span").removeClass("hide");
    else $(this).find(".btn span").addClass("hide");
  });
});
