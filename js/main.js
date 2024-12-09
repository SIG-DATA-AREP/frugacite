$(document).ready(function () {
  // Load the default page (accueil)
  $("#main-content").load("pages/accueil.html");

  // Event handler for menu links
  $(".menu-link").click(function (e) {
    e.preventDefault();

    // Get the page name from the href attribute
    let page = $(this).attr("href").substring(1); // Remove the '#' character

    // Update the URL without reloading
    window.history.pushState(null, null, `#${page}`);

    // Load the corresponding page content
    load_page(page);
  });

  // Handle back/forward navigation
  $(window).on("popstate", function () {
    let page = window.location.hash.substring(1);
    load_page(page);

    // Handle actived nav-link
    $("a.nav-link.active").removeClass("active");
    let activePage = window.location.hash.substring(1);
    if (activePage) {
      $(`a.nav-link[href="#${activePage}"]`).addClass("active");
      id_of_dorpdown = $(`a.dropdown-item[href="#${activePage}"]`)
        .parent()
        .parent()
        .attr("aria-labelledby");
      if (id_of_dorpdown)
        $(`a.nav-link[id="${id_of_dorpdown}"]`).addClass("active");
    } else $(`a.nav-link[href="#accueil"]`).addClass("active");
  });

  // Select all map sliders
  $(".map_slider").each(function () {
    const slider = $(this); // Current slider instance

    // Click event for the right button
    // slider.find(".map-right-button").on("click", function () {
    //   // Slide in the sliding div for the current slider
    //   slider.find(".map-sliding-div").css("left", "0");
    // });
  });
});
