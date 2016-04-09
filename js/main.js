(function() {
  const toggle = document.getElementById('toggle');
  let universe = [];
  let paused = true;
  let timer;

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
    const universe = [];

    for (let i = 0; i < 100; i++) {
      universe.push([]);

      for (let j = 0; j < 70; j++) {
        universe[i].push(Math.round(Math.random()));
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

  paint();

  toggle.addEventListener('click', function toggleClick() {
    if (paused) play();
    else pause();
  });

  document
    .getElementById('shuffle')
    .addEventListener('click', function shuffleClick() {
      if (!paused) pause();
      paint();
    });
})();
