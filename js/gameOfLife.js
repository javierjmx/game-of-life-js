var gameOfLife = {};

(function() {
  function transtition(cell, universe) {
    let i = cell[0];
    let j = cell[1];
    let liveNeighbours = 0;
    let a, b, live;

    for (a = i - 1; a <= i + 1; a++) {
      for (b = j - 1; b <= j + 1; b++) {
        if (a === i && b === j) continue;

        try {
          live = universe[a][b];
        }
        catch (e) {
          continue;
        }

        if (live) liveNeighbours++;
      }
    }

    if (liveNeighbours === 3) return true;
    if (universe[i][j] && liveNeighbours === 2) return true;

    return false;
  }

  gameOfLife.tick = function gameOfLifeTick(universe) {
    return universe.map((row, i) => {
      return row.map((cell, j) => transtition([i, j], universe));
    });
  };
})();
