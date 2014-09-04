var graphics = {};

(function() {
  var canvas = document.getElementById('canvas');
  graphics.scene = function(universe) {
    universe.map(function(row, i) {
      row.map(function(cell, j) {
        var context = canvas.getContext('2d'),
            size = 20;
        context.fillStyle = cell ? 'black' : 'white';
        context.fillRect(size*i, size*j, size, size);
      });
    });
  };
})();
