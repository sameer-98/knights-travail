const knightMoves = require('./app')

test('minimum no of moves', () => {
    expect(knightMoves([0,0],[1,2])).toEqual(1)
});
test('minimum no of moves', () => {
    expect(knightMoves([0,0],[3,3])).toEqual(2)
});