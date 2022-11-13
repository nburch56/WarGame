let Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    deck: [],
    playerOneDeck: [],
    playerTwoDeck: [],
    playerOnePoints: 0,
    playerTwoPoints: 0,
    }

class PlayWar {
     BuildDeck() {
        for(let suit = 0; suit < Deck.suits.length; suit++){
            for(let card = 0; card < Deck.cards.length; card++){
                Deck.deck.push([Deck.cards[card], Deck.suits[suit]]);
            }
        } 
    }

     ShuffleDeck() {
        Deck.deck.forEach((card,index) => {
            let position = Math.floor(Math.random() * Deck.deck.length);
            let cardToSwap = Deck.deck[position];
            Deck.deck[position] = card;
            Deck.deck[index] = cardToSwap;
        });
        console.log(Deck.deck[0]);
        console.log(Deck.deck[14]);
        console.log(Deck.deck[51]);
        console.log(Deck.deck[24]);
    }
     
     DealCards() {
        for (let i = 0; i < 26; i++) {
        Deck.playerOneDeck.push(Deck.deck[0]);
        Deck.deck.splice(0,1);
        Deck.playerTwoDeck.push(Deck.deck[0]);
        Deck.deck.splice(0,1);
        }
        console.log(Deck.playerOneDeck[25]);
        console.log(Deck.playerTwoDeck[25]);
    }
     
     PlayGame() {
        do {
        if (Deck.playerOneDeck[0] > Deck.playerTwoDeck[0]) {
            Deck.playerOnePoints = Deck.playerOnePoints + 1;
            Deck.playerOneDeck.splice(0,1);
            Deck.playerTwoDeck.splice(0,1);
        }
        if (Deck.playerOneDeck[0] < Deck.playerTwoDeck[0]) {
            Deck.playerTwoPoints = Deck.playerTwoPoints + 1;
            Deck.playerOneDeck.splice(0,1);
            Deck.playerTwoDeck.splice(0,1);
        }
        if (Deck.playerOneDeck[0] = Deck.playerTwoDeck[0]) {
            Deck.playerOneDeck.splice(0,1);
            Deck.playerTwoDeck.splice(0,1);
            console.log('Tie');
        }
        } while (Deck.playerOneDeck.length >= 1 && Deck.playerTwoDeck.length >= 1)
    
        console.log(`Player One scored ${Deck.playerOnePoints} points.
    Player Two scored ${Deck.playerTwoPoints} points.`)
        if (Deck.playerOnePoints > Deck.playerTwoPoints) {
            console.log('Player One Wins!');
        } else if (Deck.playerOnePoints < Deck.playerTwoPoints) {
            console.log('Player Two Wins!');
        } else {
            console.log('Its a tie!');
        }
      }
    }
     
let playWar = new PlayWar();
playWar.BuildDeck();
playWar.ShuffleDeck();
playWar.DealCards();
playWar.PlayGame();