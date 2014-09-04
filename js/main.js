(function() {
  var seed = [
    [false, false, false, false, false, false, false, false, false],
    [false, false, true, false, false, false, true, true, false],
    [false, false, true, false, false, false, true, true, false],
    [false, false, true, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, true, true, false, false, false, true, false],
    [false, true, false, false, true, false, false, true, false],
    [false, false, true, true, false, false, false, true, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, true, true, false, false, false],
    [false, false, true, true, true, false, false, true, true, false, false, false],
    [false, true, true, true, false, false, false, false, false, true, true, false],
    [false, false, false, false, false, false, false, false, false, true, true, false],
    [false, false, false, false, false, false, false, false, false, false, false, false],
  ],
      universe = seed;

  setInterval(function() {
    graphics.scene(universe);
    universe = gameOfLife.tick(universe);
  }, 250);
})();
