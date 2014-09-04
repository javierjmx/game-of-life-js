(function() {
  var universe = [];
  for (var i = 0; i < 100; i++) {
    universe.push([]);
    for (var j = 0; j < 100; j++) {
      universe[i].push( Math.round(Math.random()));
    }
  }

  setInterval(function() {
    graphics.scene(universe);
    universe = gameOfLife.tick(universe);
  }, 250);
})();
