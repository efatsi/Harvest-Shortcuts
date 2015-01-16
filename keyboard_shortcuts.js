$(document).keydown(function(e) {
  // j
  if (e.keyCode == 74) {
    $(".js-harvest-current-view").find(".js-jump-one-day-back")[0].click()
  }

  // k
  else if (e.keyCode == 75) {
    $(".js-harvest-current-view").find(".js-jump-one-day-forward")[0].click()
  }

  // t
  else if (e.keyCode == 84) {
    $(".js-harvest-current-view").find(".jump-to-today")[0].click()
  }
});
