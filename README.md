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
![]() <img src="/src/assets/mastermind-start.png" alt="Mastermind home page.">  
*Home page with two options: start the game, or learn how to play.*

![]() <img src="/src/assets/mastermind-game-on.png" alt="Mastermind game on. Four attempts have been submitted.">  
*The game is on and four attempts have been submitted. In the top left corner, a counter shows the number of remaining attempts. To the right of each submitted attempt, the user gets feedback on the selected colors.*

![]() <img src="/src/assets/mastermind-game-won.png" alt="Mastermind game won. The user is congratulated for cracking the code in six attempts.">  
*The user won the game by cracking the color code in six attempts. If the code is not cracked within 12 attempts, it's game over for the user.*

## Technologies used
1. [React.js](https://react.dev/)
2. [React Router](https://reactrouter.com/)
3. [TypeScript](https://www.typescriptlang.org/)
4. [Tailwind CSS](https://v2.tailwindcss.com/)

## Accessibility considerations
A color based code cracking game like Mastermind is inherently inaccessible to many users. All information about the current as well as the previous attempts is highly important if you are to crack the code. In this app, I put a lot of work into making the game accessible.

### Written information on all colors
Relying solely on colors when conveying important information to the user is an absolute no-go. Therefore, all colors in this game are accompanied by textual labels. On all color pegs, the first letter of the color name (e.g. R for red) is shown in the middle of the color. Additionally, the color options from which the user selects and adds colors to the current attempt are displayed with the full name of the color to the right of it. Similarly, the feedback provided on each attempt (in the board game merely black and white color pegs) is a combination of colors and letters.

### Dynamic aria-labels on current attempt
All colors that the user selects and adds to the current attempt gets dynamically updating `aria-labels`, informing assistive technologies of the color name (e.g. blue) and the color's position (e.g. 2). If the user decides to delete a color from the attempt, the changed value of the given position is set as the new `aria-label`. Thus, users of assistive technologies continuously get all information needed to successfully select and position colors.

### Aria-labels on previous attempts
Every previous attempt has an `aria-label` informing about attempt number, selected colors and feedback on the attempt. Each attempt is a keyboard focusable (but not clickable) list item. This ensures that users of assistive technologies can review each attempt sequentially and gather all necessary information.

### Aria-pressed on clickable colors and positions
There are six colors to chose from when adding colors to the current attempt and four positions to place a color in. Colors are added to the attempt by selecting a color and a position. This allows the user to place any given color at any empty position. In order to ensure accessibility, all color options and all positions have an `aria-pressed` attribute to let the user know whether a color/position is selected or not.

### Aria-live and useRef
To ensure that users of assistive technologies receive information about changes in the UI, both the `aria-live` attribute and the React hook `useRef` are used. Setting `aria-live` to `polite` on the positions in the current attempt makes screen readers read aloud the updated aria-label at the next appropriate moment.  
When the game is over, i.e. the user either cracked the code or ran out of attempts to do so, a result card gets rendered. The `useRef` hook is used to create a "cardRef" and add it as the value of the `ref` attribute set on the card. In a `useEffect`, the `focus()` method is used on the "cardRef" to add focus to the card and thus ensure that screen readers will read aloud the card when it is rendered.

## Stumbling and learning points
One of my personal goals with building this app was to gain more experience working with TypeScript in React. It has been a both challenging and rewarding process characterized by trial and error. Along the way, I've gained confidence working with things like optional interface properties, React props, the Context API, React state setter functions, events, etc. Getting all the types right while at the same time creating a fun, visually appealing and fully accessible game proved to be a great learning experience.

## Future additions
To further enhance the UX, a future addition to this app could be a drag-and-drop functionality allowing the user to drag a color to the desired position in the current attempt or even drag a selected color from one position to another. However, it is crucial to ensure that this functionality does not compromise accessibility in any way.