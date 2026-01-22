const cardArray = [
    {
        name: 'cheeseburger',
        img: "images/cheeseburger.png"
    },
    {
        name: 'fries',
        img: "images/fries.png"
    },
    {
        name: 'hotdog',
        img: "images/hotdog.png"
    },
    {
        name: 'ice-cream',
        img: "images/ice-cream.png"
    },
    {
        name: 'milkshake',
        img: "images/milkshake.png"
    },
    {
        name: 'pizza',
        img: "images/pizza.png"
    },
    {
        name: 'cheeseburger',
        img: "images/cheeseburger.png"
    },
    {
        name: 'fries',
        img: "images/fries.png"
    },
    {
        name: 'hotdog',
        img: "images/hotdog.png"
    },
    {
        name: 'ice-cream',
        img: "images/ice-cream.png"
    },
    {
        name: 'milkshake',
        img: "images/milkshake.png"
    },
    {
        name: 'pizza',
        img: "images/pizza.png"
    },
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById("grid");
const resultDisplay = document.getElementById("result");

const createBoard = () => {
    
    for (let i = 0; i < cardArray.length; i++) {
        const img = document.createElement('img');

        img.setAttribute('src', 'images/blank.png');
        img.setAttribute('data-id', i);
        img.addEventListener('click', flipCard)
        gridDisplay.append(img);
        
    }

}

createBoard()
let cardsChosen = []
let cardsChosenIds = []
let cardWon = []

function flipCard() {
    const cardId = this.getAttribute('data-id');
    const cardName = cardArray[cardId].name;

    cardsChosen.push(cardName)
    cardsChosenIds.push(cardId)

    if (cardsChosen.length <= 2) { // only flip 2 cards
        this.setAttribute('src', cardArray[cardId].img); // flip the card
        this.removeEventListener('click', flipCard);
    } 
     if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optoinTowId = cardsChosenIds[1];
    
    if (cardsChosen[0] === cardsChosen[1]) { // if there's a match
            console.log('You Found a Match!');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optoinTowId].setAttribute('src', 'images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optoinTowId].removeEventListener('click', flipCard);
            cardWon.push(cardsChosen)
            resultDisplay.textContent = cardWon.length;

    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optoinTowId].setAttribute('src', 'images/blank.png');
        cards[optionOneId].addEventListener('click', flipCard);
        cards[optoinTowId].addEventListener('click', flipCard);
            
    }
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'You Won !';
    }
}