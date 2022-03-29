# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Trung Trieu

Time spent: 2 hours spent in total

Link to project: https://glitch.com/edit/#!/ruddy-translucent-sign

## Required Functionality

The following **required** functionality is complete:

* [*] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [*] "Start" button toggles between "Start" and "Stop" when clicked. 
* [*] Game buttons each light up and play a sound when clicked. 
* [*] Computer plays back sequence of clues including sound and visual cue for each button
* [*] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [*] User wins the game after guessing a complete pattern
* [*] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [*] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [*] Buttons use a pitch (frequency) other than the ones in the tutorial
* [*] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [*] Computer picks a different pattern each time the game is played
* [*] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I did not use any outside resources.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
The main challenge I encountered was the differences in syntax of HTML, css, and JavaScript compared to languages I have used before such as C/C++, Python, Java. I had never used any of them before. Therefore, getting this project started required me to read every section carefully. For example, when adding the function to change the pattern every time the start button is pressed, I wanted to declare an integer i as the index used for the array pattern but I received an error because I had typed it as "for (int i = 0; ...)". Thus, I needed to scroll back up to see which keyword was needed for declaring global variables which is "var" in this case. I also did not know how to declare an array without assigning any elements or specifying the size of the array. I tried "var pattern[] or var pattern[8]" but none of them worked. So I had to experiment a little bit by trying different approaches for declaring an array that I knew until I found the correct way which is "var pattern = []". My main method of overcoming this challenge was to apply the concepts I learned in previous computer science courses to find the correct approaches in this assignments since I know that many languages are similar in many ways and many are built on the C language.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
How is it done when a user click on a certain link on a website and they get directed to another page or to a new tab with the new page?
How is the stack frame implemented for web development for using the back button to go back to the previous pages?
Is there a memory management scheme used for web development?
What are some tools/languages, other than HTML, CSS, and JavaScript, widely used for web development? And what are their pros and cons?
Does web development handle pointers/addresses of variables?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had more time, I would love to add different sounds to the results of the game. Some exciting sound would be played when a player won or some sad but encouraging sound with a message "Good luck next time" when a player lost. 

I would also love to add more games for a player. A player could decide whether or not to continue the games. If they chose to stop, it could display a summary of how many games played, how many times they won and lost, and finally the win rate. 

I would also change the colors of the buttons for each game to increase the difficulty.

## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Trung Trieu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
