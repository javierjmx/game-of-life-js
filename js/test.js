function testTransition() {
  let universe = [
    [false, false, false, false],
    [false, true, false, false],
    [false, false, false, false],
    [false, true, false, true],
    [true, true, true, false],
    [true, true, true, false],
    [true, true, true, false]
  ];
  let no_neighbours = [1, 1];
  let one_neighbour = [1, 2];
  let two_neighbours = [2, 1];
  let three_neighbours = [2, 2];
  let four_neighbours = [3, 2];
  let eight_neighbours = [5, 1];
  let edge_case = [0, 0];

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
  let universe = [
    [true, false, false],
    [false, true, false],
    [false, false, true]
  ];
  let result = [
    [false, true, false],
    [true, true, true],
    [false, true, false]
  ];

  console.log('- - - testTick - - -');

  let assertion = tick(universe).every((row, i) => {
    return row.every((cell, j) => cell === result[i][j]);
  });

  console.log(assertion);
}

function testTransform() {
  let universe = [
    [false, true, false],
    [true, true, true],
    [false, true, false]
  ],
  let result = '&nbsp;.&nbsp;<br>...<br>&nbsp;.&nbsp;<br>';

  console.log('- - - testTransform - - -');
  console.log(transform(universe) === result);
}

testTransition();
testTick();
testTransform();
