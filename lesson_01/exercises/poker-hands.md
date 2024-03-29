# Poker Hands

Compare a pair of poker hands and indicate which, if either, has is the winning hand and why.

## Poker Rules

A poker deck contains 52 cards - each card has a suit which is one of clubs, diamonds, hearts, or spades (denoted C, D, H, and S in the input data). Each card also has a value which is one of 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, ace (denoted 2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A). For scoring purposes, the suits are unordered while the values are ordered as given above, with 2 being the lowest and ace the highest value.

A poker hand consists of 5 cards dealt from the deck. Poker hands are ranked by the following partial order from lowest to highest.

- High Card: Hands which do not fit any higher category are ranked by the value of their highest card. If the highest cards have the same value, the hands are ranked by the next highest, and so on.
- Pair: 2 of the 5 cards in the hand have the same value. Hands which both contain a pair are ranked by the value of the cards forming the pair. If these values are the same, the hands are ranked by the values of the cards not forming the pair, in decreasing order.
- Two Pairs: The hand contains 2 different pairs. Hands which both contain 2 pairs are ranked by the value of their highest pair. Hands with the same highest pair are ranked by the value of their other pair. If these values are the same the hands are ranked by the value of the remaining card.
- Three of a Kind: Three of the cards in the hand have the same value. Hands which both contain three of a kind are ranked by the value of the 3 cards.
- Straight: Hand contains 5 cards with consecutive values. Hands which both contain a straight are ranked by their highest card.
- Flush: Hand contains 5 cards of the same suit. Hands which are both flushes are ranked using the rules for High Card.
- Full House: 3 cards of the same value, with the remaining 2 cards forming a pair. Ranked by the value of the 3 cards.
- Four of a kind: 4 cards with the same value. Ranked by the value of the 4 cards.
- Straight flush: 5 cards of the same suit with consecutive values. Ranked by the highest card in the hand.

### Examples

| **Bob (Player 1)** | **John (Player 2)** | **Output**                             |
| ------------------ | ------------------- | -------------------------------------- |
| 2H 3D 5S 9C KD     | 2C 3H 4S 8C AH      | Bob wins. - with high card: Ace        |
| 2H 4S 4C 2D 4H     | 2S 8S AS QS 3S      | John wins. - with full house: 4 over 2 |
| 2H 3D 5S 9C KD     | 2C 3H 4S 8C KH      | John wins. - with high card: king      |
| 2H 3D 5S 9C KD     | 2D 3H 5C 9S KH      | Tie.                                   |

### Hint

There are two dimensions to this problem. Firstly how to rank a particular hand (“Flush” or “Two Pairs” etc) and secondly how to compare hands and determine which will win.

A very easy way to get going with this Kata is just to concentrate on the first dimension, and write lots of code that can successfully assigns a rank to all the different kinds of hand. You’ll find some refactoring in order when you come to tackle the second dimension.

Write just enough code to identify one or two ranks, then start working on comparing hands. You can fill in the details of all the different ranks when you have a basic structure that can both rank and compare hands.
