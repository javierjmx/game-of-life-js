(function() {
  var universe = [],
      paused = true,
      toggle = document.getElementById('toggle'),
      timer;

  function pause() {
    clearInterval(timer);
    toggle.innerHTML = 'play';
    paused = true;
  }

  function play() {
    timer = setInterval(animate, 250);
    toggle.innerHTML = 'pause';
    paused = false;
  }

  function shuffle() {
    var universe = [];
    for (var i = 0; i < 100; i++) {
      universe.push([]);
      for (var j = 0; j < 70; j++) {
        universe[i].push( Math.round(Math.random()));
      }
    }
    return universe;
  }

  function animate() {
    universe = gameOfLife.tick(universe);
    graphics.scene(universe);
  }

  function paint() {
    universe = shuffle();
    graphics.scene(universe);
  }

  paint()
  toggle.addEventListener('click', function() {
    if (paused) {
      play();
    } else {
      pause();
    }
  });
  document.getElementById('shuffle').addEventListener('click', function() {
    if (!paused) {
      pause();
    }
    paint();
  });
})();
