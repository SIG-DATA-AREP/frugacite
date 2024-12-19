$(document).ready(function () {
  // Function to parse the hash into page and parameters
  function parseHash(hash) {
    // Remove the leading '#'
    if (hash.startsWith("#")) {
      hash = hash.substring(1);
    }

    // Split the hash into page and query
    let [page, query] = hash.split("?");

    let params = {};
    if (query) {
      // Parse query parameters
      query.split("&").forEach((param) => {
        let [key, value] = param.split("=");
        params[key] = value;
      });
    }

    return { page, params };
  }

  // Function to load the page and handle scrolling
  function load_page(page) {
    $("#main-content").load(`pages/${page}.html`, function () {
      // After the content is loaded, check if there's an element to scroll to
      if (currentParams.section) {
        const targetElement = $(`#${currentParams.section}`);
        if (targetElement.length) {
          // Animate scrolling to the target element
          $("html, body").animate(
            {
              scrollTop: targetElement.offset().top,
            },
            500
          );
        }
      }
    });
  }

  // Initial load based on the current hash
  let initialHash = window.location.hash;
  let { page: initialPage, params: initialParams } =
    parseHash(initialHash) || {};
  if (!initialPage) {
    initialPage = "accueil"; // Default page
    initialParams = {};
  }
  var currentParams = initialParams; // To be used in load_page

  load_page(initialPage);
  handleActiveLink(initialPage);

  // Event handler for menu links
  $(".menu-link").click(function (e) {
    e.preventDefault();

    // Get the full hash from the href attribute
    let fullHash = $(this).attr("href").substring(1); // Remove the '#' character

    // Parse the hash to get page and parameters
    let { page, params } = parseHash(fullHash);

    // Update currentParams
    currentParams = params;

    // Update the URL without reloading
    window.history.pushState(null, null, `#${fullHash}`);

    // Load the corresponding page content
    load_page(page);

    // Handle active navigation link
    handleActiveLink(page);
  });

  // Handle back/forward navigation
  $(window).on("popstate", function () {
    let hash = window.location.hash;
    let { page, params } = parseHash(hash) || {};
    if (!page) {
      page = "accueil";
      params = {};
    }
    currentParams = params;
    load_page(page);
    handleActiveLink(page);
  });

  // Function to handle active navigation links
  function handleActiveLink(activePage) {
    $("a.nav-link.active").removeClass("active");
    $(`a.nav-link[href^="#${activePage}"]`).addClass("active");

    // Handle dropdown active state if applicable
    let dropdownItem = $(`a.dropdown-item[href^="#${activePage}"]`);
    if (dropdownItem.length) {
      let dropdownId = dropdownItem
        .closest(".dropdown")
        .find("a.nav-link")
        .attr("id");
      if (dropdownId) {
        $(`a.nav-link[id="${dropdownId}"]`).addClass("active");
      }
    }
  }
});
