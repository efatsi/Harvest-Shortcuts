$(document).keydown(function(e) {
  if ($(".modal-overlay").length == 0 || $(".modal-overlay.hidden").length > 0) {
    // k
    if (e.keyCode == 75) {
      $(".js-harvest-current-view").find(".js-jump-one-day-back")[0].click()
    }

    // j
    else if (e.keyCode == 74) {
      $(".js-harvest-current-view").find(".js-jump-one-day-forward")[0].click()
    }

    // t
    else if (e.keyCode == 84) {
      $(".js-harvest-current-view").find(".jump-to-today")[0].click()
    }
  }
});
