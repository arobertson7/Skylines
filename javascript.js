// City class
class City {
    constructor(name, image, hint)
    {
        this.name = name;
        this.image = image;
        this.hint = hint;
    }
}

// U.S. cities
const ny = new City("New York City", "./images/nyc.jpg", "The greatest city in the world (Unopinionated).");
const la = new City("Los Angeles", "./images/la.avif", '\u266B' + " Californiaaa.. knows how to party.." + '\u266B' + ". In the cityyyy of __. " + '\u266B');
const sf = new City("San Francisco", "./images/sf.jpg", "They named their most famous bridge with a different color than it actually is.");
const seattle = new City("Seattle", "./images/seattle.jpg", "That's the space needle.");
const chicago = new City("Chicago", "./images/chicago.avif", "chicago hint");
const lv = new City("Las Vegas", "./images/lv.avif", "lv hint");
const philly = new City("Philadelphia", "./images/philly.jpg", "philly hint");
const dc = new City("Washington D.C.", "./images/dc.jpg", "dc hint");
const miami = new City("Miami", "./images/miami.webp", "miami hint");
const atl = new City("Atlanta", "./images/atl.webp", "atl hint");
const denver = new City("Denver", "./images/denver.jpg", "denver hint");
const phx = new City("Phoenix", "./images/phx.jpg", "phx hint");
const boston = new City("Boston", "./images/boston.webp", "boston hint");
const nash = new City("Nashville", "./images/nash.jpg", "nash hint");
const stl = new City("St. Louis", "./images/stl.webp", "stl hint");
const portland = new City("Portland", "./images/portland.jpg", "portland hint");
const knox = new City("Knoxville", "./images/knox.webp", "knox hint");
// const cross = new City("Crossville, Tennessee", "./images/cross.jpg", "cross hint");

// U.S. cities array
let cities = [ny, la, sf, seattle, chicago, lv, philly, dc, miami, atl, denver, phx, boston, nash, stl, portland, knox];

// Queue class
class Queue {
    constructor() {
        this.queue = [];
    }

    isEmpty() {
        return this.queue.length == 0;
    }

    push(item) {
        // add new items to back of array
        this.queue.push(item);
    }

    pop()
    {
        if (!this.isEmpty())
        {
            // pop by moving every element following the first up one position in the array (overwriting the first element and moving the rest up one position)
            this.queue.shift();
            return true;
        }
        else
        {
            return false;
        }
    }

    peek() {
        if (!this.isEmpty())
        {
            return this.queue[0];
        }
        else
        {
            return false;
        }
    }
}


// cityQueue placeholder for holding cities in each game
const cityQueue = new Queue();
// number of rounds per game
let rounds = 10;
// placeholder for current number of correct answers
let correctCount = 0;
// placeholder for current question number
let currentRound = 1;

// an array holding various responses to display when answer is correct
const correctResponses = ["Correct!", "Impressive!", "Your parents must be proud.", "Nice!", "Well done.", "Bravo.",
                            "Wunderbar!", "You've been around the block, huh?", "Not bad!"];

/* End main data
***********************************************************************************************************************************************************
***********************************************************************************************************************************************************
   Begin helper functions
*/


// Function for generating random index between 0 - (n - 1).
function randomIndex(n)
{
    return Math.floor(Math.random() * n);
}

// Temporary helper function for checking if a particular index has already been used for filling queue (There's probably a more efficient way)
// Takes an arrray of used indexes and the new index to be checked.
function indexAlreadyUsed(usedIndexArray, newIndex) {
    for (let i = 0; i < usedIndexArray.length; i++)
    {
        if (usedIndexArray[i] == newIndex)
        {
            return true; // already used
        }
    }
    return false; // not yet used
}



/* End helper functions
***********************************************************************************************************************************************************
***********************************************************************************************************************************************************
   Begin game functions
*/

function nextRound() {
    // update question number and display
    currentRound++;
    score.childNodes[0].textContent = `City ${currentRound}/10`;

    // remove most recent city from the queue
    cityQueue.pop();

    // remove answer display
    gamePanel.removeChild(nextq);

    // add question display back to game panel
    displayQuestion();

    // make hint section visible again
    document.getElementById("hints").style.visibility = "visible";

    setupNewRound();
}

function evaluateAnswer(correct) {

    // temporarily hide hints section
    document.getElementById("hints").style.visibility = "hidden";
    // temporarily remove question and buttons
    gamePanel.removeChild(questions);
    
    // Logic for any round except the last one
    if (currentRound != 10)
    {
        // display answer ("correct" or "incorrect") and add button for going to next question
        const answer = document.createElement("div");
        answer.id = "answer";
        answer.appendChild(document.createElement("h2"));
        answer.childNodes[0].style.fontSize = "2.5rem";
        // for comments
        answer.appendChild(document.createElement("p"));
        //next question button
        const nextQuestionButton = document.createElement("button");
        // adding a little style on hover
        nextQuestionButton.addEventListener("mouseenter", () => {
            nextQuestionButton.style.background = "linear-gradient(to bottom right, white, 15%, black)";
        })
        nextQuestionButton.addEventListener("mouseout", () => {
            nextQuestionButton.style.background = null;
        })
        nextQuestionButton.classList.add("next-question-button");
        nextQuestionButton.textContent = "Next City " + '\u2192';
        gamePanel.insertBefore(answer, hints);

        if (correct == true)
        {
            let response = correctResponses[randomIndex(correctResponses.length)]; // random response for correct answer
            answer.childNodes[0].textContent = response;
            if (correctCount == 7) // high score response
            {
                answer.childNodes[0].textContent = "Is there anywhere you haven't been?";
            }
            if (answer.childNodes[0].textContent.length > 32)
            {
                answer.childNodes[0].style.fontSize = "1.5rem"; // smaller font size if response is longer
            }
            else if (answer.childNodes[0].textContent.length >= 20)
            {
                answer.childNodes[0].style.fontSize = "1.75rem";
            }
            gamePanel.style.background = "linear-gradient(to top right, white, 1%, green)";
            correctCount++;

        }
        else
        {
            answer.childNodes[0].textContent = "Nein!";
            answer.childNodes[1].textContent =  `That's ${cityQueue.peek().name} my friend.`;
            answer.style.justifyContent = "space-around"; // when there're two text elements
            gamePanel.style.background = "linear-gradient(to top left, white, 0%, rgb(178, 13, 13))";
            
        }

        setTimeout(() => {
            gamePanel.removeChild(answer);
            const nextQ = document.createElement("div");
            nextQ.classList.add("next-question-button-container");
            nextQ.id = "nextq";
            nextQ.appendChild(nextQuestionButton);
            gamePanel.insertBefore(nextQ, hints);
            gamePanel.style.background = null;
        }, 2500);

        // update display of current grade 
        score.childNodes[1].textContent = `Current Grade: ${Math.round((correctCount / currentRound) * 100)}%`;


        nextQuestionButton.addEventListener("click", () => {
            nextRound();
        })
    }
    else // On the last round
    {
        // do something else
        gamePanel.removeChild(score);

    }
    
}

function displayQuestion() {
    //Questions section
    const questions = document.createElement("div");
    questions.id = "questions";
    questions.classList.add("questions");
    gamePanel.insertBefore(questions, hints);
    questions.appendChild(document.createElement("h2"));
    questions.childNodes[0].textContent = "Which city is this?";
    let choices = document.createElement("div");
    choices.id = "choices";
    choices.classList.add("choices");
    questions.appendChild(choices);
    // add 4 answer choice buttons (initialized here with no text content)
    for (let i = 0; i < 4; i++)
    {
        choices.appendChild(document.createElement("button"));
    }

    // Enable functionality for answer choice buttons
    const buttons = choices.childNodes;
    buttons.forEach((button) => {
        // change color on mouse enter
        button.addEventListener("mouseenter", () => {
            button.style.background = "linear-gradient(to bottom right, black, 20%, white, 90%, black)";
            button.style.color = "black";
            button.style.boxShadow = "5px 4px 5px gray";
        })
        // revert on mouse out
        button.addEventListener("mouseout", () => {
            button.style.background = null; // null reverts the style back to how it is set in the stylesheet (removes alterations made here in js)
            button.style.color = null;
            button.style.boxShadow = null;
        })
        // on click, show answer
        button.addEventListener("click", () => {
            let correctOrIncorrect = button.textContent == cityQueue.peek().name; // bool determining if answer was correct or incorrect
            evaluateAnswer(correctOrIncorrect);
        })
    })
}

function setupGameDisplay()
{
    // Setup game container
    const gameContainer = document.querySelector(".game-container-start");
    gameContainer.classList.remove("game-container-start");
    gameContainer.classList.add("game-container-next");
    const startButton = document.querySelector(".start-button");
    gameContainer.removeChild(startButton); // remove start button
    const leftSide = document.createElement("div"); // add picture section
    leftSide.classList.add("city-image");
    gameContainer.appendChild(leftSide);
    const cityPic = document.createElement("img");
    cityPic.id="city-pic";
    leftSide.appendChild(cityPic);
    // Set picture to the correct answer city
    let firstPic = cityQueue.peek().image;
    cityPic.src=firstPic;
    const gamePanel = document.createElement("div"); // add right side section
    gamePanel.classList.add("game-panel");
    gamePanel.id="gamePanel";
    gameContainer.appendChild(gamePanel);


    // Setup right side of game panel

    // Score section
    let score = document.createElement("div");
    score.id = "score"; /* id allows ability to access dynamically created dom object. i don't think we can reference globally though or it will throw error
                           from the start. will essentially have to pass around through functions once game starts it seems. For example create the game panel here
                           and then once it's time to initalize the queue and buttons and whatnot, we should be able to create a separate function for that,
                           call it at the end of this function and then be able to access the dynamically created dom elements from there since they will now
                           be in the dom. */
    score.classList.add("score");
    gamePanel.appendChild(score);
    let questionNumber = document.createElement("p");
    questionNumber.textContent = "City 1/10";
    score.appendChild(questionNumber);
    let grade = document.createElement("p");
    grade.textContent = "Current Grade: --";
    score.appendChild(grade);

    // Hints section
    let hints = document.createElement("div");
    hints.id = "hints";
    hints.classList.add("hints");
    gamePanel.appendChild(hints);
    let hintButton = document.createElement("button");
    hintButton.textContent = "Hint?";
    hints.appendChild(hintButton);
    let hintsRemaining = document.createElement("p");
    hintsRemaining.textContent = "3 remaining";
    hints.appendChild(hintsRemaining);

    // Display question and choice buttons
    displayQuestion();
}

function setupCitiesQueue() {
    // Setup the queue of randomized cities for new game
    let numOfCities = cities.length; // number of cities in the cities array
    let usedIndexes = []; // for storing indexes which were already used
    for (let i = 0; i < rounds; i++)
    {
        let randomCityIndex;
        do {randomCityIndex = randomIndex(numOfCities);
        }
        while (indexAlreadyUsed(usedIndexes, randomCityIndex));
        usedIndexes.push(randomCityIndex);
        cityQueue.push(cities[randomCityIndex]);
    }
}

function setupNewRound() {
    // Set picture to the correct answer city
    let cityPic = cityQueue.peek().image;
    let picContainer = document.getElementById("city-pic");
    picContainer.src=cityPic;

    // Set random answer choices
    // Start with ensuring that the correct city is in one of them, a random one;
    let answerButtonIndex = randomIndex(4);
    choices.childNodes[answerButtonIndex].textContent = cityQueue.peek().name;

    let usedCityIndexes = []; // for storing city indexes which were already used
    
    // push index of the answer city to the usedIndexes array so it is not used below for another answer choice button
    for (let i = 0; i < cities.length; i++)
    {
        if (cities[i].name == cityQueue.peek().name)
        {
            usedCityIndexes.push(i);
        }
    }

    //Set the other 3 buttons with random city names
    for (let i = 0; i < 4; i++)
    {
        let randomCityIndex;
        if (i != answerButtonIndex) // go through all 4 buttons but skip the one holding the correct answer
        {
            do {randomCityIndex = randomIndex(cities.length);
            }
            while (indexAlreadyUsed(usedCityIndexes, randomCityIndex));
            usedCityIndexes.push(randomCityIndex);
            choices.childNodes[i].textContent = cities[randomCityIndex].name;
        }

    }
}




// Play new game
function playGame() {

    // Set up a new queue of (number of rounds) random cities for the game
    setupCitiesQueue();

    // Display the game
    setupGameDisplay();
    
    // Populate image and random answer choices for the first round
    setupNewRound();

}

// Start new game button
let startButton = document.querySelector(".start-button");
// adding a little style on hover
startButton.addEventListener("mouseenter", () => {
    startButton.style.background = "linear-gradient(to bottom right, white, 15%, black)";
})
startButton.addEventListener("mouseout", () => {
    startButton.style.background = null;
})
// start game on click
startButton.addEventListener("click", () => {
    playGame();
})

            