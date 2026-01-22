# Memory Game 🎮

A fun and interactive card-matching memory game built with vanilla HTML, CSS, and JavaScript. Test your memory by matching pairs of food-themed cards!

## Features

- **6 Pairs of Cards**: Match food-themed images (cheeseburger, fries, hotdog, ice cream, milkshake, and pizza)
- **Randomized Deck**: Cards are shuffled randomly at the start of each game
- **Score Tracking**: Keep track of how many pairs you've successfully matched
- **Win Condition**: Complete all 6 matches to win the game
- **Flip Animation**: Click cards to flip and reveal hidden images
- **Simple & Responsive**: Clean, easy-to-use interface

## How to Play

1. Open `index.html` in your web browser
2. Click on cards to flip them and reveal the images underneath
3. Try to find matching pairs by remembering the positions of the cards
4. When you flip two cards:
   - If they match, they stay revealed and your score increases
   - If they don't match, they flip back over after a short delay
5. Continue until you've matched all 6 pairs to win!

## Project Structure

```
Memory-Game/
├── index.html      # Main HTML file with grid container
├── main.js         # Game logic and card handling
├── style.css       # Styling for the game board
├── images/         # Image assets
│   ├── blank.png   # Blank card back
│   ├── white.png   # Matched card overlay
│   ├── cheeseburger.png
│   ├── fries.png
│   ├── hotdog.png
│   ├── ice-cream.png
│   ├── milkshake.png
│   └── pizza.png
└── README.md       # This file
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Grid layout and styling
- **Vanilla JavaScript**: Game logic without any frameworks or libraries

## Game Features Explained

### Card Shuffling
Cards are randomized using JavaScript's `sort()` with a random comparator to ensure a different layout each game.

### Flip Mechanism
- Cards start showing a blank image
- Clicking a card flips it to reveal the actual image
- Players can flip up to 2 cards before checking for matches

### Match Detection
The game compares the names of the two flipped cards. If they match:
- Both cards change to white (indicating they're matched)
- The pair is removed from further interaction
- Score increases by 1

### Game Win Condition
The game is won when all 6 pairs have been successfully matched.

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No installation or dependencies required!

### Installation

1. Clone or download the project files
2. Ensure all image files are in the `images/` folder
3. Open `index.html` in your web browser

## How the Code Works

### Main Components

**cardArray**: Contains 12 card objects (6 pairs) with name and image properties

**createBoard()**: Generates the game grid by creating image elements for each card

**flipCard()**: Handles card clicks, flips cards, and manages the selected cards array

**checkMatch()**: Compares two flipped cards and handles matching/non-matching logic

## Tips for Playing

- Focus and try to remember card positions
- Pay attention to the flip animations to catch details
- The more you play, the better you'll get!
- Perfect for quick brain exercises or casual entertainment

## Future Enhancements

Possible improvements for future versions:
- Difficulty levels with different grid sizes
- Timer/move counter
- Sound effects and animations
- Leaderboard for high scores
- Multiple themes and card designs
- Multiplayer mode

## License

This project is free to use and modify for personal or educational purposes.

---

**Enjoy the game and happy matching! 🎯**
