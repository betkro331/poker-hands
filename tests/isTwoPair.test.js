const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isTwoPair returns truthy if Two Pair', () => {
  let hand = new Hand('♣9', '♥9', '♦5', '♦3', '♣5');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('check that isTwoPair returns falsey if not Two Pair', () => {
  let hand = new Hand('♣A', '♣6', '♥4', '♣8', '♣7');
  expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});

test('check that isTwoPair returns a higher score for a stronger hand (if two hands but with Two Pair)', () => {
  let hand1 = new Hand('♣9', '♥9', '♦5', '♦9', '♣5');
  let hand2 = new Hand('♥K', '♣5', '♦K', '♦T', '♣T');
  let hand1Score = CompareHands.isTwoPair(hand1);
  let hand2Score = CompareHands.isTwoPair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});