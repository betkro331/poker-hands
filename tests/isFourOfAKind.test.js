const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that FourOfAKind returns truthy if four of a kind', () => {
  let hand = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

// Negativt test
test('check that isFourOfAKind returns falsey if not FourOfAKind', () => {
  let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});

test('check that isFourOfAKind returns a higher score for a stronger hand (if two hands but with four of a kind)', () => {
  let hand1 = new Hand('♠7', '♥7', '♦2', '♦7', '♣7');
  let hand2 = new Hand('♥Q', '♣Q', '♦Q', '♦6', '♠Q');
  let hand1Score = CompareHands.isFourOfAKind(hand1);
  let hand2Score = CompareHands.isFourOfAKind(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});