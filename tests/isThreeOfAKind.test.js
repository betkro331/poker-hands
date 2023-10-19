const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that threeOfAKind returns truthy is three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
});

// Negativt test
test('check that isThreeOfAKind returns falsey if not ThreeOfAKind', () => {
  let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeFalsy();
});

test('check that isThreeOfAKind returns a higher score for a stronger hand (if two hands but with Three Of A Kind)', () => {
  let hand1 = new Hand('♣9', '♥9', '♦6', '♦9', '♣5');
  let hand2 = new Hand('♥7', '♣7', '♦3', '♦7', '♣4');
  let hand1Score = CompareHands.isThreeOfAKind(hand1);
  let hand2Score = CompareHands.isThreeOfAKind(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});