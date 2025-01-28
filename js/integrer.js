$(document).ready(function () {
  // Select all map sliders
  // Sélection de tous les sliders
  $("#page_integrer .map_slider").each(function () {
    const slider = $(this); // Instance du slider actuel

    slider.find(".hoverer").on("mouseenter", function () {
      slider.find(".map-bottom-div").addClass("show");
    });
    slider.find(".hoverer").on("mouseleave", function () {
      slider.find(".map-bottom-div").removeClass("show");
    });

    // Bouton de droite
    slider.find(".map-right-button").on("click", function () {
      slider.find(".map-sliding-div").toggleClass("show");
      slider.find(".map-right-button span").toggleClass("show");
    });

    // Gestion de la navigation entre les sliders
    var $sliders = $("#page_integrer .map_slider");
    var $prevBtn = $("#prevBtn");
    var $bottom_prevBtn = $("#bottom-prevBtn");
    var $nextBtn = $("#nextBtn");
    var $bottom_nextBtn = $("#bottom-nextBtn");
    var $indicator = $("#sliderIndicator"); // L'élément qui affiche l'indicateur
    var total = $sliders.length;
    var currentIndex = 0; // Commence au premier slider

    // Cacher tous les sliders et afficher le premier
    $sliders.hide().eq(currentIndex).show();
    updateButtonState();

    function showSlider(index) {
      $sliders.stop(true, true).fadeOut(300);
      $sliders
        .eq(index)
        .stop(true, true)
        .fadeIn(300, function () {
          updateButtonState();
        });
    }

    function updateButtonState() {
      // Gestion de l'état du bouton "Précédent"
      if (currentIndex === 0) {
        $prevBtn.addClass("disabled");
        $bottom_prevBtn.addClass("disabled");
      } else {
        $prevBtn.removeClass("disabled");
        $bottom_prevBtn.removeClass("disabled");
      }

      // Gestion de l'état du bouton "Suivant"
      if (currentIndex === $sliders.length - 1) {
        $nextBtn.addClass("disabled");
        $bottom_nextBtn.addClass("disabled");
      } else {
        $nextBtn.removeClass("disabled");
        $bottom_nextBtn.removeClass("disabled");
      }

      // Mise à jour de l'indicateur "currentIndex/total"
      $indicator.text(currentIndex + 1 + "/" + total);
    }

    $prevBtn.click(function () {
      if (currentIndex > 0) {
        currentIndex--;
        showSlider(currentIndex);
      }
    });
    $bottom_prevBtn.click(function () {
      if (currentIndex > 0) {
        currentIndex--;
        showSlider(currentIndex);
      }
    });

    $nextBtn.click(function () {
      if (currentIndex < $sliders.length - 1) {
        currentIndex++;
        showSlider(currentIndex);
      }
    });
    $bottom_nextBtn.click(function () {
      if (currentIndex < $sliders.length - 1) {
        currentIndex++;
        showSlider(currentIndex);
      }
    });
  });
  add_info_slider();
});
