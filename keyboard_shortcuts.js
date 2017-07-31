$(document).keydown(function(e) {
  if ($(".modal-overlay").length == 0 || $(".modal-overlay.hidden").length > 0) {
    // k
    if (e.keyCode == 75) {
      $(".test-previous-day").children()[0].click()
    }

    // j
    else if (e.keyCode == 74) {
      $(".test-next-day").children()[0].click()
    }

    // t
    else if (e.keyCode == 84) {
      $(".js-today").click()
    }
  }
});
