James Davis
October 1st Comp 23 Lab Readme

game.js creates the game
player.js creates the ship
enemy.js creates a enemy
rock.js creates a rock

In game.js, the world is created and populated (in the create() function) by the ship, an enemy and a rock.
In the update() function, the ship's direction and orientation are determined by the position of the mouse & the w, a, s and d keys.
Also, update() checks if the ship is overlapping with an enemy (in which case kill_ship is called) or overlapping with a rock
(in which case kill_rock is called).

index.html links all of the files together and links them to the phaser program. This file is what's run in a web browser to play the game.

I had a lot of trouble with this assignment and my finished product didn't work. I wasn't able to figure out how to construct ship/
enemy/rock objects in the game world when I put the make functions in separate files. I will continue to study phaser but for this
particular assignment I just wasn't able to peice together what I knew with the code provided. I wasn't able to come to office hours
this week due to other committments but I will come to them next week if I'm still struggling. Until then I will continue work on
project 1.

Rock clip art found at http://www.clker.com/cliparts/N/a/y/P/c/d/rock-md.png