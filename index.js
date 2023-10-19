const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');
const CompareHands = require('./CompareHands');

// ♥♦♣♠

// isStraightFlush
// let hand1 = new Hand('♥9', '♥T', '♥J', '♥Q', '♥K');
// let hand2 = new Hand('♣9', '♣T', '♣J', '♦Q', '♣K');

// isFourOfAKind
// let hand1 = new Hand('♣Q', '♥Q', '♦5', '♦Q', '♠Q');
// let hand2 = new Hand('♥2', '♣T', '♦J', '♠8', '♣3');

// isFullHouse
// let hand1 = new Hand('♣7', '♥5', '♦5', '♦7', '♣5');
// let hand2 = new Hand('♥1', '♣T', '♦J', '♥Q', '♣3');

// isFlush
// let hand1 = new Hand('♥J', '♥8', '♥4', '♥3', '♥2');
// let hand2 = new Hand('♥1', '♣3', '♦J', '♥7', '♣5');

// isStrait
// let hand1 = new Hand('♣7', '♠6', '♠5', '♥4', '♥3');
// let hand2 = new Hand('♣9', '♣T', '♣J', '♦Q', '♣K');

// isThreeOfAKind
// let hand1 = new Hand('♣4', '♥5', '♦5', '♦7', '♣5');
// let hand2 = new Hand('♥1', '♣T', '♦J', '♥Q', '♣3');

// isTwoPair
// let hand1 = new Hand('♥1', '♣T', '♦J', '♥Q', '♣3');
// let hand2 = new Hand('♣9', '♥9', '♦5', '♦3', '♣5');

// isOnePair
// let hand1 = new Hand('♥1', '♣T', '♦J', '♥Q', '♣3');
// let hand2 = new Hand('♣9', '♣5', '♥9', '♣7', '♦3');
console.log(CompareHands.comparer(hand1, hand2));

