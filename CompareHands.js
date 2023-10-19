module.exports = class CompareHands {

  static suits = '♥♦♣♠';
  static ranks = '23456789TJQKA';

  // return the winning hand
  static comparer(hand1, hand2) {

    let comparers = [
      'isStraightFlush',
      'isFourOfAKind',
      'isFullHouse',
      'isFlush',
      'isStraight',
      'isThreeOfAKind',
      'isTwoPair',
      'isOnePair',
      'isHighestCard'
    ];

    // Loopar och anropar ovan metoder (om det behövs)
    for (let comparer of comparers) {
      let hand1Score = this[comparer](hand1);
      let hand2Score = this[comparer](hand2);
      console.log(comparer, 'hand1Score', hand1Score, 'hand2Score', hand2Score);
      // nobody has this kind combination - continue to next comparer
      if (hand1Score === 0 && hand2Score === 0) { continue; }
      // at least has one hand has this kind of combination
      // which hand won?
      if (hand1Score === hand2Score) { return [hand1, hand2]; }
      else if (hand1Score > hand2Score) { return hand1; }
      else { return hand2; }
    }

  }


  // Ex: Q♥ J♥ 10♥ 9♥ 8♥
  static isStraightFlush(hand) {
    // if not straight or not flush -> 0
    // otherwise score of flush
    return this.isStraight(hand) && this.isFlush(hand);
  }

  
  // Ex: 7♥ Q♥ 7♦ 7♠ 7♣ 
  static isFourOfAKind(hand) {
    let rankCounts = {}; 

    for (let card of hand.cards) {
      let rank = card.rank;
      if (rankCounts[rank]) {
        rankCounts[rank]++;
         // Om 4 av samma rank = Four of a Kind
        if (rankCounts[rank] === 4) {
          return this.rankToPoint(rank) * 10 ** 4;
        }
      } else {
        rankCounts[rank] = 1; // Annars 1:a kortet av ngn rank
      }
    }
    return 0; // Inga fyra av samma rank hittades
  }


  // T ex 3♣ 3♠ 3♦ 6♣ 6♥
  static isFullHouse(hand) {
    this.sortByRank(hand);
    let threeOfAKindFound = null;
    let pairFound = null;
    let score = 0;
    let counter = 0;

    for (let i = 0; i < hand.cards.length - 2; i++) {
      if (hand.cards[i].rank === hand.cards[i + 1].rank && hand.cards[i + 1].rank === hand.cards[i + 2].rank)
      {
        threeOfAKindFound = hand.cards[i].rank;
        break;
      }
    }
    for (let i = 0; i < hand.cards.length - 1; i++) {
      if (hand.cards[i].rank === hand.cards[i + 1].rank && hand.cards[i].rank && hand.cards[i].rank !== threeOfAKindFound) {
        pairFound = hand.cards[i].rank;
        break
      }
    }
    if (threeOfAKindFound !== null && pairFound !== null) {
      counter += 3;
      score = this.rankToPoint(threeOfAKindFound) * 10 ** counter;
      return score; 
  }
  return 0;
}

  
  // Cards all of the same suit, not all of sequential rank
  // Ex: K♦ J♦ 9♦ 6♦ 4♦
  static isFlush(hand) {
    let suits = [];
    for (let card of hand.cards) {
      suits.push(card.suit);
    }
    // not a flush -> 0
    if ([...new Set(suits)].length !== 1) {
      return 0;
    }
    // return points depending of strength of flush
    this.sortByRank(hand);
    let score = 0;
    let counter = 0;
    for (let card of hand.cards) {
      score += this.rankToPoint(card.rank) * 10 ** counter;
      counter += 2;
    }
    return score;
  }


  // cards of sequential rank, not all of the same suit
  // Ex: 7♣ 6♠ 5♠ 4♥ 3♥
  static isStraight(hand) {
    this.sortByRank(hand);
    // get the ranks of the cards
    let ranks = '';
    for (let card of hand.cards) {
      ranks += card.rank;
    }
    // if both 2 and A then place A first
    if (ranks.includes('2') && ranks.includes('A')) {
      ranks = 'A' + ranks.slice(0, 4);
    }
    // not a straight -> 0
    if (!('A' + this.ranks).includes(ranks)) { return 0; };
    // return points depending on strength of straight (#4 is highest)
    return this.rankToPoint(ranks[4]);
  }


  // Ex: 9♠ 9♥ 9♦ 10♦ 8♥
  static isThreeOfAKind(hand) {
    this.sortByRank(hand);
    let counter = 0;
   
    for (let i = 0; i < hand.cards.length - 2; i++) {
      if (hand.cards[i].rank === hand.cards[i + 1].rank &&
        hand.cards[i + 1].rank === hand.cards[i + 2].rank &&
        hand.cards[1 + 3] !== hand.cards[i + 4]) {
        counter += 2;
        return this.rankToPoint(hand.cards[i].rank) * 10 ** counter;
      }
    }
    return 0; // Inga tre av samma rank hittades
  }


  // Ex: 5♣ 5♠ 4♦ 4♥ 10♥
  static isTwoPair(hand) {
    this.sortByRank(hand);
    let counter = 0;
    let pair1Found = null;
    let pair2Found = null;

    if (this.isFullHouse(hand)) {
      return 0; // Om det är en full house, returnera 0
    }

    for (let i = 0; i < hand.cards.length; i++) {
      for (let j = i + 1; j < hand.cards.length; j++) {
        if (hand.cards[i].rank === hand.cards[j].rank) {
          if (pair1Found === null) {
            // Sätt första parets "värde"
            pair1Found = hand.cards[i].rank;
            // Om "nytt par" inte har samma "värde" som par1
          } else if (hand.cards[i].rank !== pair1Found) {
            // Sätt par2's värde
            pair2Found = hand.cards[i].rank;
            i = j; // Hoppa över det andra kortet i det andra paret
          }
        }
        // Om två olika par hittades
        if (pair1Found !== null && pair2Found !== null) { 
          counter += 2;
          return this.rankToPoint(Math.max(pair1Found, pair2Found)) * 10 ** counter;
        }
      }
    }
    return 0; // Inga två olika par hittades
  } 
  
  
  // Ex: 6♦ 6♥ Q♠ 8♣ 7♦
  static isOnePair(hand) {
    this.sortByRank(hand);
    let counter = 0;

    for (let i = 0; i < hand.cards.length - 1; i++) {
      if (hand.cards[i].rank === hand.cards[i + 1].rank) {
        counter += 1;
        return this.rankToPoint(hand.cards[i].rank) * 10 ** counter;
      }
    }
    return 0; // Inget par hittades
  }


  // helper functions below:
  static rankToPoint(rank) {
    return this.ranks.indexOf(rank) + 2;
  }


  // Sort from highest to lowest
  static sortByRank(hand) {
    hand.cards = hand.cards.sort((a, b) => {
      return this.rankToPoint(a.rank) < this.rankToPoint(b.rank) ?
        -1 : 1;
    });
  }
}