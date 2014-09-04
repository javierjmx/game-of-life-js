function transtition(cell, universe) {
  var i = cell[0],
      j = cell[1],
      liveNeighbours = 0,
      a, b, live;

  for (a = i - 1; a <= i + 1; a++) {
    for (b = j - 1; b <= j + 1; b++) {
      if (a === i && b === j) {
        continue;
      }
      try {
        live = universe[a][b];
      }
      catch (e) {
        continue;
      }
      if (live) {
        liveNeighbours++;
      }
    }
  }

  if (liveNeighbours === 3) {
    return true;
  }
  if (universe[i][j] && liveNeighbours === 2) {
    return true;
  }

  return false;
}

function tick(universe) {
  return universe.map(function(row, i) {
    return row.map(function(cell, j) {
      return transtition([i, j], universe);
    });
  });
}

function scene(universe) {
  var canvas = document.getElementById('canvas');
  universe.map(function(row, i) {
    row.map(function(cell, j) {
      var context = canvas.getContext('2d'),
          size = 20;
      context.fillStyle = cell ? 'black' : 'white';
      context.fillRect(size*i, size*j, size, size);
    });
  });
}

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
    scene(universe);
    universe = tick(universe);
  }, 250);
})();
