$(document).ready(function() {
  $(".ellipse__outer--thick").hover(
    function() {
      $(".ellipse__outer--thick, .ellipse__outer--thin").css(
        "animation-play-state",
        "paused"
      );
    },
    function() {
      $(".ellipse__outer--thick, .ellipse__outer--thin").css(
        "animation-play-state",
        "running"
      );
    }
  );
});
