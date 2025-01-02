$(document).ready(function () {
  // TOOGLE FOR CARD HEADER
  $(".card-header").on("click", function () {
    if ($(this).find(".btn span").hasClass("hide"))
      $(this).find(".btn span").removeClass("hide");
    else $(this).find(".btn span").addClass("hide");
  });

  // Sélection de tous les sliders 01
  $("#page_methodologie_resultats .mapSliderContainer.01 .map_slider").each(
    function () {
      const slider = $("#page_methodologie_resultats .mapSliderContainer.01"); // Instance du slider actuel

      // Gestion de la navigation entre les sliders
      var $sliders = $(
        "#page_methodologie_resultats .mapSliderContainer.01 .map_slider"
      );
      var $prevBtn = slider.find(".prevBtn");
      var $nextBtn = slider.find(".nextBtn");
      var $indicator = slider.find(".sliderIndicator"); // L'élément qui affiche l'indicateur
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
        } else {
          $prevBtn.removeClass("disabled");
        }

        // Gestion de l'état du bouton "Suivant"
        if (currentIndex === $sliders.length - 1) {
          $nextBtn.addClass("disabled");
        } else {
          $nextBtn.removeClass("disabled");
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

      $nextBtn.click(function () {
        if (currentIndex < $sliders.length - 1) {
          currentIndex++;
          showSlider(currentIndex);
        }
      });
    }
  );

  // Sélection de tous les sliders 02
  $("#page_methodologie_resultats .mapSliderContainer.02 .map_slider").each(
    function () {
      const slider = $("#page_methodologie_resultats .mapSliderContainer.02"); // Instance du slider actuel

      // Gestion de la navigation entre les sliders
      var $sliders = $(
        "#page_methodologie_resultats .mapSliderContainer.02 .map_slider"
      );
      var $prevBtn = slider.find(".prevBtn");
      var $nextBtn = slider.find(".nextBtn");
      var $indicator = slider.find(".sliderIndicator"); // L'élément qui affiche l'indicateur
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
        } else {
          $prevBtn.removeClass("disabled");
        }

        // Gestion de l'état du bouton "Suivant"
        if (currentIndex === $sliders.length - 1) {
          $nextBtn.addClass("disabled");
        } else {
          $nextBtn.removeClass("disabled");
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

      $nextBtn.click(function () {
        if (currentIndex < $sliders.length - 1) {
          currentIndex++;
          showSlider(currentIndex);
        }
      });
    }
  );

  // Sélection de tous les sliders 03
  $("#page_methodologie_resultats .mapSliderContainer.03 .map_slider").each(
    function () {
      const slider = $("#page_methodologie_resultats .mapSliderContainer.03"); // Instance du slider actuel

      // Gestion de la navigation entre les sliders
      var $sliders = $(
        "#page_methodologie_resultats .mapSliderContainer.03 .map_slider"
      );
      var $prevBtn = slider.find(".prevBtn");
      var $nextBtn = slider.find(".nextBtn");
      var $indicator = slider.find(".sliderIndicator"); // L'élément qui affiche l'indicateur
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
        } else {
          $prevBtn.removeClass("disabled");
        }

        // Gestion de l'état du bouton "Suivant"
        if (currentIndex === $sliders.length - 1) {
          $nextBtn.addClass("disabled");
        } else {
          $nextBtn.removeClass("disabled");
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

      $nextBtn.click(function () {
        if (currentIndex < $sliders.length - 1) {
          currentIndex++;
          showSlider(currentIndex);
        }
      });
    }
  );
  
  // Sélection de tous les sliders 03  
  $("#page_methodologie_resultats .mapSliderContainer.04 .map_slider").each(
    function () {
      const slider = $("#page_methodologie_resultats .mapSliderContainer.04"); // Instance du slider actuel
  
      // Gestion de la navigation entre les sliders
      var $sliders = $(
        "#page_methodologie_resultats .mapSliderContainer.04 .map_slider"
      );
      var $prevBtn = slider.find(".prevBtn");
      var $nextBtn = slider.find(".nextBtn");
      var $indicator = slider.find(".sliderIndicator"); // L'élément qui affiche l'indicateur
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
        } else {
          $prevBtn.removeClass("disabled");
        }
  
        // Gestion de l'état du bouton "Suivant"
        if (currentIndex === $sliders.length - 1) {
          $nextBtn.addClass("disabled");
        } else {
          $nextBtn.removeClass("disabled");
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
  
      $nextBtn.click(function () {
        if (currentIndex < $sliders.length - 1) {
          currentIndex++;
          showSlider(currentIndex);
        }
      });
    }
  );
});
