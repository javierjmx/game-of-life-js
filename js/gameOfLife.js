var gameOfLife = {};

(function() {
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

  gameOfLife.tick = function(universe) {
    return universe.map(function(row, i) {
      return row.map(function(cell, j) {
        return transtition([i, j], universe);
      });
    });
  };
})();
