# Blackjack Game Instructions

1. Create Blackjack-start folder.

2. Add index.html file

3. Add default html5 code

4. Add <p> for textArea and 3 buttons for Start, Hit, Stand

5. Add style.css and link to index.html

6. Set styles for body and buttons to make them center aligned and bigger

7. Add script.js and link to index.html

8. Create suits and values arrays

9. Access the buttons and text area

10. Hide Hit and Stand button

11. Define gameStart = false, gameOver = false, and playerWon = false, deck = []

12. Add event listener to start button

13. Start click handler: Hide Start Button and show Hit and Stand

14. Start click handler: Set gameStart = true, gameOver = false, playerWon= false

15. Start click handler: Call create deck function and set it to deck array

16. createDeck: make 2 for loops on suits and values and create cards and push to the deck array

17. shuffleDeck: use a for loop over deck cards and swapped cards randomly

18. getting dealerCards and playerCard from deck

19. Call showStatus to see dealer and player's scores

20. Give player options whether to stand or hit

21. Check if its end of game if the scores are over 21

Description:
Blackjack is a card game which the objective is to have a higher hand than the dealer while also not going over a total of 21. An ace and a face card/ten is a Blackjack because they add up to 21 points. Ace can be either one or eleven points.

How to play:
When you first get to the page, a box will pop up asking you how much money you would like to start off with, default is \$100.
<img src="https://i.imgur.com/8mBAgMz.png">

After you press "OK", then click "Start", another box will pop up asking you how much money you would like to bet, after when you have entered your amount and then pressed "OK", the game will start.
<img src="https://i.imgur.com/MY25Pf6.png">

It will deal both you and the dealer two cards, this is where you have the choice whether to stand (not get another card) or hit (get another card added to your hand).
<img src="https://i.imgur.com/DPIdA6p.png">

Depending on if you win or lose, the bet amount will be deducted from your balance. Good luck!
<img src="https://i.imgur.com/isxLQY6.png">

Technologies Used:
HTML, CSS, Javascript

Getting started:
To play this game, click on the link here:
[Blackjack](https://emilykchow.github.io)

Next Steps:
Dealer's side can decide whether to stand or hit, because right now the dealer will always hit if it the total is under 21, and lower than the player's card.
