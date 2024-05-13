# Mastermind
The classic board game Mastermind is a code cracking game for two players. One player creates a secret code consisting of four colors, and the other player gets 12 attempts to crack the code. After each submitted attempt, the code creator provides feedback to the code cracker about the correctness of colors and positions. If the code cracker succeeds in cracking the code, they win the game. If not, the code creator wins.  
This app is a recreation of the board game for one single player. The secret color code is generated randomly on game start, and the user's job is to crack the code. The app is a Progressive Web App, built with React.js, React Router, TypeScript and Tailwind CSS, and it can be added to the home screen of the user's mobile device.

## In this document:
1. [App live site](#app-live-site)
2. [App screenshots](#screenshots)
3. [Technologies used](#technologies-used)
4. [Accessibility considerations](#accessibility-considerations)
5. [Stumbling and learning points](#stumbling-and-learning-points)
6. [Future additions](#future-additions)

## App live site
[Mastermind game live on Netlify](https://mastermind-v2-ajo-b.netlify.app/)

## App screenshots
![]() <img src="/src/assets/mastermind-start.png" width=300px alt="Mastermind home page.">  
*Home page with two options: start the game, or learn how to play.*

![]() <img src="/src/assets/mastermind-gameon.png" width=300px alt="Mastermind game on. Four attempts have been submitted.">  
*The game is on and four attempts have been submitted. In the top left corner, a counter shows the number of remaining attempts. To the right of each submitted attempt, the user gets feedback on the selected colors.*

![]() <img src="/src/assets/mastermind-gamewon.png" width=300px alt="Mastermind game won. The user is congratulated for cracking the code in six attempts.">  
*The user won the game by cracking the color code in six attempts. If the code is not cracked within 12 attempts, it's game over for the user.*

## Technologies used
1. [React.js](https://react.dev/)
2. [React Router](https://reactrouter.com/)
3. [TypeScript](https://www.typescriptlang.org/)
4. [Tailwind CSS](https://v2.tailwindcss.com/)

## Accessibility considerations
A color based code cracking game like Mastermind is inherently inaccessible to many users. All information about the current as well as and the previous attempts is higly important if you are to crack the code. In this app, I put a lot of work into making the game accessible.

### Dynamic aria-labels on current attempt
All colors that the user selects and adds to the current attempt gets dynamically updating aria-labels, informing assistive technologies of the color name (e.g. blue) and the color's position (e.g. 2). If the user decides to delete a color from the attempt, the changed value of the given position is set as the new aria-label. Thus, users of assistive technologies continuously get all information needed to successfully select and position colors.

### Aria-labels on previous attempts
Every previous attempt has an aria-label informating about attempt number, selected colors and feedback on the attempt. Each attempt is a keyboard focusable (but not clickable) list item. This ensures that users of assistive technologies can look through the attempts one by one and gather information before submitting the next attempt.

### Aria-pressed on clickable colors and positions
There are six colors to chose from when adding colors to the current attempt and four positions to place a color in. Colors are added to the attempt by selecting a color and a position. This allows the user to place a given color at any empty position. To ensure accessibily, all color options and all positions have an aria-pressed attribute to let the user know whether a color/position is selected or not.

