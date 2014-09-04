function testTransition() {
  var universe = [
    [false, false, false, false],
    [false, true, false, false],
    [false, false, false, false],
    [false, true, false, true],
    [true, true, true, false],
    [true, true, true, false],
    [true, true, true, false]
  ],
      no_neighbours = [1, 1],
      one_neighbour = [1, 2],
      two_neighbours = [2, 1],
      three_neighbours = [2, 2],
      four_neighbours = [3, 2],
      eight_neighbours = [5, 1]
      edge_case = [0, 0];

  console.log('- - - testTransition - - -');
  console.log(transtition(no_neighbours, universe) === false);
  console.log(transtition(one_neighbour, universe) === false);
  console.log(transtition(two_neighbours, universe) === true);
  console.log(transtition(three_neighbours, universe) === true);
  console.log(transtition(four_neighbours, universe) === false);
  console.log(transtition(eight_neighbours, universe) === false);
  console.log(transtition(edge_case, universe) === false);
}

function testTick() {
  var universe = [
    [true, false, false],
    [false, true, false],
    [false, false, true]
  ],
      result = [
    [false, true, false],
    [true, true, true],
    [false, true, false]
  ];
  console.log('- - - testTick - - -');
  var assertion = tick(universe).every(function(row, i) {
    return row.every(function(cell, j) {
      return cell === result[i][j];
    });
  });
  console.log(assertion);
}

function testTransform() {
  var universe = [
    [false, true, false],
    [true, true, true],
    [false, true, false]
  ],
      result = '&nbsp;.&nbsp;<br>...<br>&nbsp;.&nbsp;<br>';
  console.log('- - - testTransform - - -');
  console.log(transform(universe) === result);
}

testTransition();
testTick();
testTransform();
