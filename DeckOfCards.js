const Card = require('./Card');
const Hand = require('./Hand');

// Skapar, blandar och delar ut kort från en kortlek
module.exports = class DeckOfCards {

  //Metoderna körs omedelbart efter att en instans har skapats
  constructor() {
    this.createDeck();
    this.shuffle();
  }

  // Looper svit och nr/rang och nytt kort skapas med hjälp av Card-klassen
  // Läggs till en array
  createDeck() {
    this.cards = [];
    for (let suit of '♥♦♣♠') {
      for (let rank of '23456789TJQKA') {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  // Blandar korten slumpmässigt
  shuffle() {
    let array = this.cards;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Tar de fem första korten från kortleken och skapar en ny hand genom att
  // anropa Hand-klassen med de valda korten. Dessa tas sedan bort ur kortleken (splice)
  dealHand() {
    return new Hand(...this.cards.splice(0, 5));
  }
}