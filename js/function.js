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

function add_info_slider() {
  const text1 = "Vous pouvez faire défiler les images grâce aux flèches rouge de part et d'autre de l'image. ";
  const text2 = "Sur chaque image, une légende s'affiche au passage de la souris. ";
  const text3 = "Une fiche d'identité avec des informations complémentaires est disponible en cliquant sur la croix en haut à droite de l'image. ";

  // Vérifie si au moins un slider existe
  if ($(".mapSliderContainer").length > 0) {
    $(".mapSliderContainer").each(function () {
      const $slider = $(this);
      const hasMapRightButton = $slider.find(".map-right-button").length > 0;
      const hasMapBottomDiv = $slider.find(".map-bottom-div").length > 0;
      var infoText = text1;
      infoText += hasMapBottomDiv ? text2 : "";
      infoText += hasMapRightButton ? text3 : "";

      // Crée la div info si elle n'existe pas
      if ($slider.find(".info-slider").length === 0) {
        const $infoDiv = $(
          `<div class="info-slider">
            <span class="info_icon">!</span>
            <span class="info-text">${infoText}</span>
            <span class="close-btn">&times;</span>
          </div>`
        );
        
        // Ajoute la div info au slider
        $slider.prepend($infoDiv);

        // Ajoute l'événement pour cacher la div info
        $infoDiv.find(".close-btn").on("click", function () {
          $infoDiv.hide();
        });
      }
    });
  }
}

