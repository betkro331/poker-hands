const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isStraight returns truthy if straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBeTruthy();
});

// Negativt test

test('check that isStraight returns falsey if not isStraight', () => {
  let hand = new Hand('♣7', '♠6', '♠5', '♥4', '♥J');
  expect(CompareHands.isFlush(hand)).toBeFalsy();
});