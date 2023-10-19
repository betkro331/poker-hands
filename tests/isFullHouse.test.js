const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isFullHouse returns truthy if Full House', () => {
  let hand = new Hand('♣5', '♥T', '♦5', '♦T', '♣5');;
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

// Negativt test
test('check that isFullHouse returns falsey if not Full House', () => {
  let hand = new Hand('♣2', '♣6', '♥4', '♣T', '♣7');
  expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});

test('check that isFullHouse returns a higher score for a stronger hand (if two hands but with Full House)', () => {
  let hand1 = new Hand('♣7', '♥5', '♦5', '♦7', '♣5');
  let hand2 = new Hand('♥Q', '♣8', '♦Q', '♦8', '♣Q');
  let hand1Score = CompareHands.isFullHouse(hand1);
  let hand2Score = CompareHands.isFullHouse(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});