const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isOnePair returns truthy if One Pair', () => {
  let hand = new Hand('♣T', '♥9', '♦5', '♦3', '♣5');
  expect(CompareHands.isOnePair(hand)).toBeTruthy();
});

test('check that isOnePair returns falsey if not One Pair', () => {
  let hand = new Hand('♣Q', '♦5', '♥4', '♣8', '♣3');
  expect(CompareHands.isOnePair(hand)).toBeFalsy();
});

test('check that isOnePair returns a higher score for a stronger hand (if two hands but with One Pair)', () => {
  let hand1 = new Hand('♣9', '♥9', '♦5', '♦3', '♣2');
  let hand2 = new Hand('♥Q', '♣5', '♦Q', '♦T', '♣7');
  let hand1Score = CompareHands.isOnePair(hand1);
  let hand2Score = CompareHands.isOnePair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});