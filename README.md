# super-duper-bassoon
CODING BOOTCAMP Project #2 - Group 4


## Title
Word Wizards multi-player game

## Development Team
Mustafa Abdelrahman, Rachel Brain, Suva Pokharel, David Szamek

## Description
A two player rapid-fire word game that draws on a players’ vocabulary to input words fitting the game parameters under time pressure.

## User Story

```md
AS AN avid reader/writer who thrives on competition and extending my vocabulary
I WANT a Content Management System (CMS) style game which allows me to interact with another player under time pressure to come up with as many words fitting the parameters as I can
SO THAT, together, we can extend our vocabulary and have some fun
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog-style site
WHEN I visit the site for the first time
THEN I am presented with a log-in window
WHEN I log in
THEN I am presented with a Player dashboard so I can choose a wizard avatar and select a level of difficulty
WHEN I have chosen a wizard avatar and selected a level of difficulty
THEN I am presented with a countdown timer with 5 seconds until the game starts with a "health bar" for my avatar and my opponent's avatar
WHEN the timer reaches zero
THEN the game starts & I see the word parameters (eg. 5-letter words starting with "h") and an input box plus a timer (25 seconds?)
WHEN I type a word fitting the parameters and press the "enter" button
THEN the word is checked against the dictionary
WHEN the word is accepted, it sits at the top of the box (in another color) with the count 1 and the "health bar" of my opponent drops by a percentage
THEN I am able to type another word fitting the parameters and press the "enter" button again
WHEN the word is NOT accepted because it is not a valid word or is not spelt correctly 
THEN I am given an error message, the word is removed and my "health bar" drops by a percentage
WHEN one of my opponent's words is accepted
THEN my "health bar" drops by a percentage
WHEN the timer runs out or the "health bar" of one of the players has reached zero
THEN a message is shown saying that the game is over
THEN my list of words is shown (with my user name) alongside my opponent's list of words and user name and a message confirming the winner
WHEN the game is over
THEN I am presented with a prompt asking if I would like to play again
WHEN I choose "yes"
THEN the game runs again with new word parameters
WHEN I choose "no"
THEN I am exited from the game
WHEN I exit from the game
THEN I see a results page with my score included with all other scores from the same level of difficulty
WHEN I go to the profile page of my user name
THEN I see all of the statistics of my game career such as Words typed! Players Beaten! etc.
WHEN I visit the site for subsequent times
THEN I do not have to re-enter my login details as they are saved via cookies
```

## Heroku URL


## GitHub URL
https://github.com/rachel-brain/super-duper-bassoon