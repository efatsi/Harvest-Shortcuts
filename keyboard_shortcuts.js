$(document).keydown(function(e) {
  if (
    $(".hui-dialog-backdrop").length == 0 ||
    $(".js-submit").length == 0 ||
    $(".js-close").length == 0
  ) {
    // j
    if (e.keyCode == 74) {
      $(".test-next")[0].click();
    }

    // k
    else if (e.keyCode == 75) {
      $(".test-previous")[0].click();
    }

    // t
    else if (e.keyCode == 84) {
      $(".js-today").click();
    }
  }
});
