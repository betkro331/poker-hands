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
  expect(CompareHands.isStraight(hand)).toBeFalsy();
});

test('check that isStraight returns a higher score for a stronger hand (if two hands but with is straight)', () => {
  let hand1 = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  let hand2 = new Hand('♣J', '♥9', '♦T', '♦8', '♣7');
  let hand1Score = CompareHands.isStraight(hand1);
  let hand2Score = CompareHands.isStraight(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});