function load_page(page) {
  $("#main-content").load(
    `pages/${page}.html`,
    function (response, status, xhr) {
      if (status === "error") {
        // If there was an error (e.g., file not found), load accueil.html
        $("#main-content").load("pages/accueil.html");
        console.error(
          `Error loading page ${page}: ${xhr.status} ${xhr.statusText}`
        );
      }
    }
  );
}
