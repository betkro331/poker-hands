const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isStraightFlush returns truthy if straight flush', () => {
  for (let suit of suits) {
    let hand = new Hand('♥9', '♥T', '♥J', '♥Q', '♥K');
    expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
  }
});

test('check that isStraightFlush returns falsey if not straight flush', () => {
  let hand = new Hand('♣3', '♣6', '♥4', '♣8', '♣7');
  expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
});

test('check that isStraightFlush returns a higher score for a stronger hand (if two hands but with straight flush)', () => {
  let hand1 = new Hand('♥9', '♥T', '♥J', '♥Q', '♥K');
  let hand2 = new Hand('♦8', '♦9', '♦T', '♦7', '♦6');
  let hand1Score = CompareHands.isFlush(hand1);
  let hand2Score = CompareHands.isFlush(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});