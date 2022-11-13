let Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    deck: [],
    playerOneDeck: [],
    playerTwoDeck: [],
    playerOnePoints: 0,
    playerTwoPoints: 0,
    }


function BuildDeck() {
    for(let suit = 0; suit < Deck.suits.length; suit++){
        for(let card = 0; card < Deck.cards.length; card++){
            Deck.deck.push([Deck.cards[card], Deck.suits[suit]]);
        }
    } 
   /* console.log(Deck.deck[0]);console.log(Deck.deck[0])
        
    console.log(Deck.deck[14]);
    console.log(Deck.deck[51]);
    console.log(Deck.deck[24]); */
}
BuildDeck();