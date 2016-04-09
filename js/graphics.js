const graphics = {};

(function() {
  const canvas = document.getElementById('canvas');

  graphics.scene = function graphicsScene(universe) {
    universe.forEach((row, i) => {
      row.forEach((cell, j) => {
        const context = canvas.getContext('2d');
        const size = 10;

        context.fillStyle = cell ? 'black' : 'white';
        context.fillRect(size * i, size * j, size, size);
      });
    });
  };
})();
