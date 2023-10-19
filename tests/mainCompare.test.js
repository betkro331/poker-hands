const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('jarl problem', () => {
  let hand1 = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
  let hand2 = new Hand('♦T', '♦9', '♦5', '♦Q', '♦A');
  expect(CompareHands.compare(hand1, hand2)).toEqual(hand2);
});