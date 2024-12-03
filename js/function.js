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

function bindHoverEffects(selector1, selector2) {
  var spans1 = $(selector1);
  var spans2 = $(selector2);

  function bindHover(spansA, spansB) {
    spansA.hover(
      function () {
        var index = spansA.index(this);
        if (spansB.eq(index).length) {
          spansB.eq(index).addClass("bold");
        }
      },
      function () {
        var index = spansA.index(this);
        if (spansB.eq(index).length) {
          spansB.eq(index).removeClass("bold");
        }
      }
    );
  }

  bindHover(spans1, spans2);
  bindHover(spans2, spans1);
}
