// City class
class City {
    constructor(name, imageArray, hint)
    {
        this.name = name;
        this.imageArray = imageArray;
        this.hint = hint;
    }
}

// U.S. cities
const ny = new City("New York City", ["./images/nyc1.jpg", "./images/nyc2.avif", "./images/nyc3.jpg", "./images/nyc4.webp", "./images/nyc5.webp", "./images/nyc6.jpg", "./images/nyc7.jpg"], "The greatest city in the world (Unopinionated).");
const la = new City("Los Angeles", ["./images/la1.avif", "./images/la2.jpg", "./images/la3.jpg", "./images/la4.jpg", "./images/la5.jpeg", "./images/la6.jpeg", "./images/la7.jpg"], '\u266B' + " Californiaaa.. knows how to party.." + '\u266B' + ". In the cityyyy of __. " + '\u266B');
const sf = new City("San Francisco", ["./images/sf1.jpg", "./images/sf2.webp", "./images/sf3.jpeg", "./images/sf4.jpg"], "They named their most famous bridge with a different color than it actually is.");
const seattle = new City("Seattle", ["./images/seattle1.jpg", "./images/seattle2.jpg"], "That's the space needle.");
const chicago = new City("Chicago", ["./images/chicago1.avif", "./images/chicago2.jpg", "./images/chicago3.webp"], "chicago hint");
const lv = new City("Las Vegas", ["./images/lv1.avif", "./images/lv2.jpg", "./images/lv3.jpg", "./images/lv4.jpg"], "lv hint");
const philly = new City("Philadelphia", ["./images/philly1.jpg", "./images/philly2.jpg", "./images/philly3.jpg", "./images/philly4.jpg"], "philly hint");
const dc = new City("Washington D.C.", ["./images/dc1.jpg", "./images/dc2.jpeg", "./images/dc3.webp"], "dc hint");
const miami = new City("Miami", ["./images/miami1.jpg", "./images/miami2.jpeg", "./images/miami3.jpg"], "miami hint");
const atl = new City("Atlanta", ["./images/atl1.webp", "./images/atl2.jpg"], "atl hint");
const denver = new City("Denver", ["./images/denver1.avif", "./images/denver2.jpg"], "denver hint");
const phx = new City("Phoenix", ["./images/phx1.jpg", "./images/phx2.jpg", "./images/phx3.png"], "phx hint");
const boston = new City("Boston", ["./images/boston1.jpg", "./images/boston2.jpg", "./images/boston3.jpg", "./images/boston4.webp", "./images/boston5.webp"], "boston hint");
const nash = new City("Nashville", ["./images/nash1.jpg", "./images/nash2.avif"], "nash hint");
const stl = new City("St. Louis", ["./images/stl1.webp", "./images/stl2.webp"], "stl hint");
const portland = new City("Portland", ["./images/portland1.jpg", "./images/portland2.webp"], "portland hint");
const knox = new City("Knoxville", ["./images/knox1.jpg", "./images/knox2.jpg", "./images/knox3.jpg"], "knox hint");
// const cross = new City("Crossville, Tennessee", ["./images/cross.jpg"], "cross hint");
const newOrleans = new City("New Orleans", ["./images/new-orleans1.avif", "./images/new-orleans2.webp", "./images/new-orleans3.jpg", "./images/new-orleans4.avif", "./images/new-orleans5.jpg"], "new orleans hint");
const sanDiego = new City("San Diego", ["./images/sd1.avif", "./images/sd2.jpeg", "./images/sd3.jpg", "./images/sd4.jpg", "./images/sd5.jpg"], "sd hint");
const honolulu = new City("Honolulu", ["./images/honolulu1.jpg", "./images/honolulu2.webp", "./images/honolulu3.jpg", "./images/honolulu4.jpg"], "honolulu hint");
const dallas = new City("Dallas", ["./images/dallas1.jpeg", "./images/dallas2.avif", "./images/dallas3.jpeg", "./images/dallas4.jpg"], "dallas hint");
const charleston = new City("Charleston", ["./images/charleston1.jpg", "./images/charleston2.jpg", "./images/charleston3.jpg", "./images/charleston4.jpg"], "charleston hint");
const detroit = new City("Detroit", ["./images/detroit1.webp", "./images/detroit2.jpeg", "./images/detroit3.avif", "./images/detroit4.jpg", "./images/detroit5.webp"], "detroit hint");
const houston = new City("Houston", ["./images/houston1.jpg", "./images/houston2.avif", "./images/houston3.jpg", "./images/houston4.jpg", "./images/houston5.jpg", "./images/houston6.jpg"], "houston hint");
const charlotte = new City("Charlotte", ["./images/charlotte1.jpg", "./images/charlotte2.webp", "./images/charlotte3.jpg", "./images/charlotte4.jpeg", "./images/charlotte5.jpg", "./images/charlotte6.webp"], "charlotte hint");
const baltimore = new City("Baltimore", ["./images/baltimore1.jpeg", "./images/baltimore2.jpg", "./images/baltimore3.jpg", "./images/baltimore4.png", "./images/baltimore5.webp", "./images/baltimore6.jpg"], "baltimore hint");
const palmSprings = new City("Palm Springs", ["./images/ps1.jpg", "./images/ps2.avif", "./images/ps3.jpg", "./images/ps4.jpeg", "./images/ps5.jpg"], "palm springs hint");
const boise = new City("Boise", ["./images/boise1.jpg", "./images/boise2.jpg", "./images/boise3.jpg", "./images/boise4.jpg", "./images/boise5.png"], "boise hint");
const sedona = new City("Sedona", ["./images/sedona1.webp", "./images/sedona2.webp", "./images/sedona3.jpg", "./images/sedona4.jpg", "./images/sedona5.jpg", "./images/sedona6.jpg"], "sedona hint");
const slc = new City("Salt Lake City", ["./images/slc1.jpg", "./images/slc2.webp", "./images/slc3.jpg", "./images/slc4.jpeg", "./images/slc5.avif", "./images/slc6.avif"], "slc hint");
const barHarbor = new City("Bar Harbor", ["./images/barHarbor1.png", "./images/barHarbor2.png", "./images/barHarbor3.jpg", "./images/barHarbor4.jpg", "./images/barHarbor5.jpg"], "bar harbor hint");
const santaFe = new City("Santa Fe", ["./images/santaFe1.jpg", "./images/santaFe2.webp", "./images/santaFe3.jpg", "./images/santaFe4.avif", "./images/santaFe5.webp"], "santa fe hint");
const newportRI = new City("Newport, RI", ["./images/newport1.jpg", "./images/newport2.jpg", "./images/newport3.jpg", "./images/newport4.jpg", "./images/newport5.jpg", "./images/newport6.jpg"], "newport hint");

// U.S. cities array
const usa = [ny, la, sf, seattle, chicago, lv, philly, dc, miami, atl, denver, phx, boston, nash, stl, portland, knox, newOrleans, sanDiego, honolulu,
                    dallas, charleston, detroit, houston, charlotte, baltimore, palmSprings, boise, sedona, slc, barHarbor, santaFe, newportRI];


// European countries
const germany = new City("Germany", ["./images/munich.avif", "./images/berlin1.avif", "./images/berlin2.jpg", "./images/bayern.jpg"], "germany hint");
const france = new City("France", ["./images/paris1.jpg", "./images/paris2.webp", "./images/paris3.jpeg"], "france hint");
const england = new City("England", ["./images/london1.jpg", "./images/london2.jpg", "./images/london3.webp", "./images/london4.jpg"], "england hint");
const spain = new City("Spain", ["./images/barcelona1.webp", "./images/barcelona2.jpg", "./images/barcelona3.jpeg"], "spain hint");
const norway = new City("Norway", ["./images/norway.jpg", "./images/oslo1.webp"], "norway hint");
const denmark = new City("Denmark", ["./images/copenhagen1.jpg", "./images/copenhagen2.jpg", "./images/copenhagen3.jpg"], "denmark hint");
const netherlands = new City("The Netherlands", ["./images/amsterdam1.jpg", "./images/amsterdam2.jpg", "./images/utrecht.webp"], "netherlands hint");
const czech = new City("Czech Republic", ["./images/prague1.jpg", "./images/prague2.jpg", "./images/prague3.jpg", "./images/prague4.webp"], "czech republic hint");
const portugal = new City("Portugal", ["./images/lisbon1.webp", "./images/nazare.jpg", "./images/lisbon2.jpg"], "portugal hint");
const austria = new City("Austria", ["./images/austria1.jpg", "./images/austria2.jpg", "./images/austria3.jpg"], "austria hint");
const switzerland = new City("Switzerland", ["./images/switzerland1.jpg", "./images/zurich1.jpg", "./images/zurich2.jpeg", "./images/zurich3.jpg", "./images/zurich4.jpg", "./images/lucerne1.jpg", "./images/lucerne2.webp"], "switzerland hint");
const italy = new City("Italy", ["./images/milan.webp", "./images/siena.jpeg", "./images/tuscany.jpg", "./images/florence.jpg", "./images/amalfi.webp"], "italy hint");


// European countries array
const europe = [germany, france, england, spain, norway, denmark, netherlands, czech, portugal, austria, switzerland, italy];


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

// Global "pointer" for tracking which version of the game is being played. (value to be assigned is the array of the correct version of the game)
let currentRegion;
// cityQueue placeholder for holding cities in each game
const cityQueue = new Queue();
// number of rounds per game
const rounds = 1;
// placeholder for current number of correct answers
let correctCount = 0;
// placeholder for current question number
let currentRound = 1;
// current grade (percentage out of 100)
let currentGrade = Math.round((correctCount / currentRound) * 100);
// currently using a global var for tracking index of currently used photo so able to show a different one when hint button is clicked
let randomImageIndex;
// currently using global vars for hint functionality
let hintsRemaining = 2;
// global variable for keeping track of which 'result' slide we're on (for swivel buttons)
// initialized to 4 because that's slide that is up when the swivel buttons appear
let currentSlide = 4;
// global variable for storing current assessment feedback
let assessmentFeedback = "";

// an array holding various responses to display when answer is correct
const correctResponses = ["Correct!", "Impressive!", "Nice!", "Well done.", "Bravo!", "Nicely done.", "World Traveler", "Wunderbar!"];

const WrongResponses = ["Nope!", "Not this time!", "Next try!", "Nö", "Not quite!"];

const A_Plus_Responses = ["Geography Genius! You've officially reached 'World Traveler' status. If there were a Nobel Prize for geography, you'd have at least three by now. The UN should call you for advice!",
    "Top of the Class! You've got the geography skills of a well-traveled detective! Sherlock Holmes would call you for tips on finding obscure countries. You're basically the Indiana Jones of map-reading.",
    "Are You a Map? You've navigated your way to an A+, making even Google Maps jealous. If there's a lost city of Atlantis, you'd probably find it before breakfast.",
    "Geography? More like Ge-uh, this is easy. You've crushed this quiz like you were born with a passport in one hand and a globe in the other. NASA is considering hiring you as a consultant.",
    "World-Class Expert! A+! You've officially unlocked 'Superhuman Geography Powers'. At this rate, the only continent you haven't visited is Antarctica... and that's only because penguins don't need your help."];
const A_Responses = [  "Nice job! You're officially a geography prodigy—at least until someone asks you about Antarctica. But hey, nobody's perfect, right?",
    "A solid A! You've got a brain like Google Maps... if Google Maps had a caffeine addiction. Keep it up, and you'll be leading world tours in no time!",
    "Impressive! You know your cities so well, I bet you could give a TED Talk on the Eiffel Tower. Maybe not a *great* TED Talk, but still.",
    "Well done! You're just a few maps away from being the human equivalent of Google Earth. Still need to work on those street names, though.",
    "You nailed it! You've got more geography knowledge than a globe, and you don't even need to spin yourself to show off. But A+ is still calling your name!",
    "You've been around, huh? You know your cities better than most! Outstanding performance."];
const B_Plus_Responses = [
    "B+? You're basically the GPS we all turn to when Google Maps glitches!",
    "B+? You're like the world's most knowledgeable tourist. Soon you'll be giving guided tours!",
    "Well done! A B+ means you're in the top tier of geography geniuses. You've got the map memorized—just a few more cities to make it perfect!",
    "Impressive! A B+ means you're a geography rockstar. You've got more cities under your belt than most people even know exist—keep it up!",
    "You've clearly racked up some miles. You deserve a vacation after that performance. Go wild with all those travel rewards!"];
const B_Responses = [  "Great job! You've got a solid grip on geography, but you're just one step away from being a map wizard. Keep going, the A's are within reach!",
    "Nice work! You're doing awesome—think of this as a high-five from the geography gods. A little more effort and you'll be in the A+ club before you know it!",
    "Well done! A B is a great score, and you've got a fantastic base of knowledge. A few more cities and you'll be on top of the world—literally!",
    "Nice! You've got a strong geography game, but you're not quite a globe-trotting superhero yet. A little more practice and you'll be in the A-range!",
    "Solid work! You know your cities, but now it's time to hit the accelerator and aim for an A. You've got this, just a few more places to learn!",
    "B-B-B-eautiful performance. You've been watching the travel channel, haven't you?"];
const C_Plus_Responses = ["Nice try! You've got the basics down, but it's clear you're still warming up. Don't worry, you'll be a geography whiz in no time with a little more practice!",
    "You're getting there! A C+ means you've got potential, like a map with a few blank spots. Keep going, and soon you'll have the whole world covered!",
    "Not bad! You've got some good knowledge under your belt, but now it's time to get serious. Think of this as the first lap of your geography marathon!",
    "You're on the right track! A C+ is like a halfway point on a road trip—there's still some driving left to do, but you're headed in the right direction!",
    "C+? Not bad! You're definitely on the right continent… just maybe need to zoom in a little!",
    "C+? Not quite *world* traveler yet, but you're definitely a *tourist* in the making!",
    "You know the important cities quite well, but show those tier 3 cities some love every now and then!"];
const C_Responses = [  "Not bad! You've got a solid start, but you might want to swap your world map for a pair of glasses. A little more effort, and you'll be cruising through this!",
    "You're halfway there! A C means you're on the map, but not quite the one showing the best tourist spots. Keep at it, and you'll level up in no time!",
    "You've got the basics down! Now it's time to dust off that globe and get serious—there's a whole world waiting for you to explore!",
    "Alright, you're not quite a geography master yet, but hey, you're closer than most people who just use maps for decoration. A little more work and you'll get there!",
    "Decent start! A C means you know *some* geography, but not enough to impress your friends at trivia night. But don't worry, it's not too late to level up!",
    "C? Hey, you're not lost… you just haven't found the right map yet.",
    "Okay, okay. You know your cities decently well, but you still have some room to grow. But hey, that's the fun part right?"];
const D_Responses = ["D? Well, at least you know the *Earth* exists, that's a start!",
    "A D?! Looks like you're a world traveler… but you've lost your passport.",
    "D? You're not quite lost in the world yet, but you're definitely wandering off track!",
    "D? Hey, you *almost* know where you are. Just maybe not on the map.",
    "D?! You've got a better chance of finding Waldo than finding all the countries.",
    "D?! You've definitely been to Earth. But as for the rest of the globe… unclear.",
    "D? You might not know where you're going, but at least you're going somewhere!",
    "C? At least you didn't fail! That's a win in some countries, right?"];
const F_Responses = ["Well... that was *something*, wasn't it? You've got the geography knowledge of a potato. But hey, potatoes can grow into French fries with a little time. Try again!",
    "You should really get out of the house more often! That was hard to watch.",
    "Yikes... I hope you at least got a good price. On that rock you've been living under!",
    "That's pretty rough. It's like you were playing pin the tail on the country. But don't worry—next time, you'll at least hit a continent. Hopefully.",
    "Well, that was a geography disaster of epic proportions. But hey, every legend has their setbacks. Grab a globe, get serious, and let's aim for a passing grade!"];

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

// Converts number grade into letter grade. returns a string letter grade
function convertToLetterGrade(grade) {
    switch(true) {
        case (96 <= grade && grade <= 100):
            return "A+";
            break;
        case (90 <= grade && grade <= 95):
            return "A";
            break;
        case (85 <= grade && grade <= 89):
            return "B+";
            break;
        case (80 <= grade && grade <= 84):
            return "B";
            break;
        case (75 <= grade && grade <= 79):
            return "C+";
            break;
        case (70 <= grade && grade <= 74):
            return "C";
            break;
        case (60 <= grade && grade <= 69):
            return "D";
            break;
        case (grade < 60):
            return "F";
            break;
    }
}

// helper function to provide the correct indefinite article while announcing grade
// just returns the article by its self in string format
function correctArticleForGradeHelper(grade) {
    let letterGrade = convertToLetterGrade(grade);
    if (letterGrade[0] == 'A' || letterGrade[0] == 'F')
    {
        return "an";
    }
    else
    {
        return "a";
    }
}

// generates comments to display based on the user's score. param integer score. returns string.
function generateFeedback(score) {
    switch(convertToLetterGrade(score)) {
        case "A+":
            return A_Plus_Responses[randomIndex(A_Plus_Responses.length)];
            break;
        case "A":
            return A_Responses[randomIndex(A_Responses.length)];
            break;
        case "B+":
            return B_Plus_Responses[randomIndex(B_Plus_Responses.length)];
            break;
        case "B":
            return B_Responses[randomIndex(B_Responses.length)];
            break;
        case "C+":
            return C_Plus_Responses[randomIndex(C_Plus_Responses.length)];
            break;
        case "C":
            return C_Responses[randomIndex(C_Responses.length)];
            break;
        case "D":
            return D_Responses[randomIndex(D_Responses.length)];
            break;
        case "F":
            return F_Responses[randomIndex(F_Responses.length)];
            break;
    }
}

// currently gives hint by providing a different picture of the same city or country
function giveHint() {
    if (hintsRemaining >= 0) // number corresponds to how many hints remain after this one
    {
        let differentImageIndex;
        do {
            differentImageIndex = randomIndex(cityQueue.peek().imageArray.length)
        }
        while (differentImageIndex == randomImageIndex);
        let newPic = cityQueue.peek().imageArray[differentImageIndex];
        cityPic.src= newPic;

        if (hintsRemaining == 1)
        {
            hintButton.nextSibling.textContent = `${hintsRemaining} left...`;
        }
        else
        {
            hintButton.nextSibling.textContent = `${hintsRemaining} remaining`;
        }
    }
}

// helper function for operating swivel button functionality
// gets called on swivel button click event listener
// @param: direction (of button pressed) , takes integer: either 0 (left) or 1 (right)
function swivelResultSlide(direction) {
    // direction argument is either 0 (left) or 1 (right)
    switch(true) {
        // invalid
        case (currentSlide == 1 && direction == 0) || (currentSlide == 4 && direction == 1):
            return;
        // slide 3 <- slide 4
        case currentSlide == 4 && direction == 0: // left from slide 4
            evaluationType.childNodes[0].textContent = "Grade:";
            evaluation.childNodes[0].textContent = `${convertToLetterGrade(currentGrade)}`;
            evaluation.childNodes[0].style.fontWeight = "800";
            evaluation.childNodes[0].style.fontSize = "14vw";
            // apply color to letter grade
            switch((convertToLetterGrade(currentGrade))[0])
            {
                case 'A':
                    evaluation.childNodes[0].style.color = "rgb(18, 162, 18)";
                    break;
                case 'B':
                    evaluation.childNodes[0].style.color = "rgb(77, 177, 0)";
                    break;
                case 'C':
                    evaluation.childNodes[0].style.color = "rgb(208, 191, 0";
                    evaluation.childNodes[0].style.textShadow = "1px 1px 2px black";
                    break;
                case 'D':
                    evaluation.childNodes[0].style.color = "orange";
                    break;
                case 'F':
                    evaluation.childNodes[0].style.color = "red";
                    break;
            }
            currentSlide--;
            // Ungray out right button
            swivelButtonsContainer.childNodes[1].style.opacity = "1";
            break;
        // slide 2 <- slide 3
        case currentSlide == 3 && direction == 0: // left from slide 3
            evaluationType.childNodes[0].textContent = "Score:";
            evaluation.childNodes[0].textContent = `${currentGrade}%`;
            evaluation.childNodes[0].style.fontWeight = null;
            evaluation.childNodes[0].style.fontSize = null;
            evaluation.childNodes[0].style.color = null;
            currentSlide--;
            break;
        // slide 1 <- slide 2
        case currentSlide == 2 && direction == 0: // left from slide 2
            evaluationType.childNodes[0].textContent = "Correct answers:";
            evaluation.childNodes[0].textContent = `${correctCount} / ${rounds}`;
            currentSlide--;
            // gray out left button
            swivelButtonsContainer.childNodes[0].style.opacity = "0.5";
            break;
        // slide 1 -> slide 2
        case currentSlide == 1 && direction == 1: // right from slide 1
            evaluationType.childNodes[0].textContent = "Score:";
            evaluation.childNodes[0].textContent = `${currentGrade}%`;
            currentSlide++;
            // Ungray out left button
            swivelButtonsContainer.childNodes[0].style.opacity = "1";
            break;
        // slide 2 -> slide 3
        case currentSlide == 2 && direction == 1: // right from slide 2
            evaluationType.childNodes[0].textContent = "Grade:";
            evaluation.childNodes[0].textContent = `${convertToLetterGrade(currentGrade)}`;
            evaluation.childNodes[0].style.fontWeight = "800";
            evaluation.childNodes[0].style.fontSize = "14vw";
            // apply color to letter grade
            switch((convertToLetterGrade(currentGrade))[0])
            {
                case 'A':
                    evaluation.childNodes[0].style.color = "rgb(18, 162, 18)";
                    break;
                case 'B':
                    evaluation.childNodes[0].style.color = "rgb(77, 177, 0)";
                    break;
                case 'C':
                    evaluation.childNodes[0].style.color = "rgb(208, 191, 0";
                    evaluation.childNodes[0].style.textShadow = "1px 1px 2px black";
                    break;
                case 'D':
                    evaluation.childNodes[0].style.color = "orange";
                    break;
                case 'F':
                    evaluation.childNodes[0].style.color = "red";
                    break;
            }
            currentSlide++;
            break;
        // slide 3 -> slide 4
        case currentSlide == 3 && direction == 1: // right from slide 3
            evaluationType.childNodes[0].textContent = "Assessment:";
            evaluation.childNodes[0].textContent = assessmentFeedback;
            evaluation.childNodes[0].style.fontWeight = null;
            evaluation.childNodes[0].style.color = null;
            evaluation.childNodes[0].style.fontSize = "4vw";
            currentSlide++;
            // gray out right button
            swivelButtonsContainer.childNodes[1].style.opacity = "0.5";
            break;
    }
}

/* End helper functions
***********************************************************************************************************************************************************
***********************************************************************************************************************************************************
   Begin game functions
*/

// called by showResults()
function displayNextGameButtons() {
    //initialized as hidden

    // add two new containers, one to each side of results container
    const leftEnd = document.createElement("div");
    leftEnd.id="leftEnd";
    leftEnd.style.visibility = "hidden";
    const rightEnd = document.createElement("div");
    rightEnd.id="rightEnd";
    rightEnd.style.visibility = "hidden";
    gameContainer.insertBefore(leftEnd, results);
    results.after(rightEnd);

    // Play again prompt/buttons (same version)
    const leftSideDiv = document.createElement("div");
    leftEnd.appendChild(leftSideDiv);
    leftSideDiv.id="leftSideDiv";
    leftSideDiv.appendChild(document.createElement("h3"));
    let cityOrCountry;
    switch(currentRegion) {
        case usa:
            cityOrCountry = "cities";
            break;
        case europe:
            cityOrCountry = "countries";
            break;
    }
    leftSideDiv.childNodes[0].textContent = `More ${cityOrCountry}!`; // "More cities where those came from!""
    const newGameButtonSame = document.createElement("button");
    newGameButtonSame.id = "newGameButtonSame";
    newGameButtonSame.textContent = "Play Again " + '\u2192';
    newGameButtonSame.classList.add("new-game-button");
    leftSideDiv.appendChild(newGameButtonSame);
    // adding a little style on hover
    newGameButtonSame.addEventListener("mouseenter", () => {
        newGameButtonSame.style.background = "linear-gradient(to bottom left, white, 1%, rgb(27, 79, 235, 0.8)";
    });
    newGameButtonSame.addEventListener("mouseout", () => {
        newGameButtonSame.style.background = null;
    });


    // Play again prompt/button (different version)
    const rightSideDiv = document.createElement("div");
    rightEnd.appendChild(rightSideDiv);
    rightSideDiv.id="rightSideDiv";
    rightSideDiv.appendChild(document.createElement("h3"));
    rightSideDiv.childNodes[0].textContent = "Broaden your horizons";
    const newGameButtonDiff1 = document.createElement("button"); // different version 1
    newGameButtonDiff1.id="newGameButtonDiff1";
    const newGameButtonDiff2 = document.createElement("button"); // different version 2
    newGameButtonDiff2.id="newGameButtonDiff2";
    // to properly name the newGameButtonDiff buttons
    let otherVersion1;
    let otherVersion2;
    if (currentRegion == usa)
    {
        otherVersion1 = "Europe";
        otherVersion2 = "Worldwide";
    }
    else if (currentRegion == europe)
    {
        otherVersion1 = "USA";
        otherVersion2 = "Worldwide";
    }
    else
    {
        otherVersion1 = "Europe";
        otherVersion1 = "USA";
    }
    newGameButtonDiff1.textContent = `${otherVersion1} ` + '\u2192';
    newGameButtonDiff2.textContent = `${otherVersion2} ` + '\u2192';
    newGameButtonDiff1.classList.add("new-game-button");
    newGameButtonDiff2.classList.add("new-game-button");
    rightSideDiv.appendChild(newGameButtonDiff1);
    rightSideDiv.appendChild(newGameButtonDiff2);

    // adding a little style on hover - button 1
    newGameButtonDiff1.addEventListener("mouseenter", () => {
        newGameButtonDiff1.style.background = "linear-gradient(to bottom left, white, 1%, rgb(27, 79, 235, 0.8)";
    });
    newGameButtonDiff1.addEventListener("mouseout", () => {
        newGameButtonDiff1.style.background = null;
    });

    // adding a little style on hover - button 2
    newGameButtonDiff2.addEventListener("mouseenter", () => {
        newGameButtonDiff2.style.background = "linear-gradient(to bottom left, white, 1%, rgb(27, 79, 235, 0.8)";
    });
    newGameButtonDiff2.addEventListener("mouseout", () => {
        newGameButtonDiff2.style.background = null;
    });
}

function endGameSmallScreen() {
    // create next game buttons
    const nextGameButtonsContainer = document.createElement("div");
    nextGameButtonsContainer.id="nextGameButtonsContainer";
    for (let i = 0; i < 3; i++) {
        const nextGame = document.createElement("div");
        nextGame.classList.add(`nextGame${i + 1}`);
        nextGame.appendChild(document.createElement("label"));
        nextGame.appendChild(document.createElement("button"));
        nextGame.childNodes[1].style.opacity = "0.5"; // initalize with lower opacity
        nextGame.childNodes[1].classList.add("nextGameButton");
        nextGameButtonsContainer.appendChild(nextGame);
        
    }
    
    // give a second or so before adding new game buttons
    let timer = 3000;
    setTimeout(() => {
        resultsHeaderContainer.style.visibility = "hidden";
        gameContainer.insertBefore(nextGameButtonsContainer, resultsContainer);
    }, timer);

    // set the next games button with the correct versions
    switch(true) {
        case currentRegion == usa:
            // first button is US
            nextGameButtonsContainer.childNodes[0].childNodes[0].textContent = "Go again!";
            nextGameButtonsContainer.childNodes[0].childNodes[0].setAttribute("for", "usa");
            nextGameButtonsContainer.childNodes[0].childNodes[1].style.backgroundImage = "url('./images/us-flag3d.webp')";
            // second button is europe
            nextGameButtonsContainer.childNodes[1].childNodes[0].textContent = "Europe";
            nextGameButtonsContainer.childNodes[1].childNodes[0].setAttribute("for", "europe");
            nextGameButtonsContainer.childNodes[1].childNodes[1].style.backgroundImage = "url('./images/eu-flag3d.png')";
            nextGameButtonsContainer.childNodes[1].childNodes[1].style.backgroundPosition = "center";
            // third button is worldwide
            nextGameButtonsContainer.childNodes[2].childNodes[0].textContent = "Worldwide";
            nextGameButtonsContainer.childNodes[2].childNodes[0].setAttribute("for", "worldwide");
            nextGameButtonsContainer.childNodes[2].childNodes[1].style.backgroundImage = "url('./images/worldwide-button.jpeg')";
            break;
        case currentRegion == europe:
            // first button is US
            nextGameButtonsContainer.childNodes[0].childNodes[0].textContent = "Go again!";
            nextGameButtonsContainer.childNodes[0].childNodes[0].setAttribute("for", "europe");
            nextGameButtonsContainer.childNodes[0].childNodes[1].style.backgroundImage = "url('./images/eu-flag3d.png')";
            nextGameButtonsContainer.childNodes[1].childNodes[1].style.backgroundPosition = "center";
            // second button is europe
            nextGameButtonsContainer.childNodes[1].childNodes[0].textContent = "USA";
            nextGameButtonsContainer.childNodes[1].childNodes[0].setAttribute("for", "usa");
            nextGameButtonsContainer.childNodes[1].childNodes[1].style.backgroundImage = "url('./images/us-flag3d.webp')";
            // third button is worldwide
            nextGameButtonsContainer.childNodes[2].childNodes[0].textContent = "Worldwide";
            nextGameButtonsContainer.childNodes[2].childNodes[0].setAttribute("for", "worldwide");
            nextGameButtonsContainer.childNodes[2].childNodes[1].style.backgroundImage = "url('./images/worldwide-button.jpeg')";
            break;
    };

    // one by one light up the next game buttons
    timer += 1700;
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            nextGameButtonsContainer.childNodes[i].childNodes[1].style.opacity = "1";
        }, timer);
        timer += 1500;
    };

    // add event listeners for new game

    // button 1 - always holds the current region so just reset variables and display and start new game
    nextGameButtonsContainer.childNodes[0].childNodes[1].addEventListener("click", () => {
        gameContainer.classList.remove("game-container-end"); // reset game container class
        gameContainer.classList.add("game-container-start");

        gameContainer.removeChild(resultsHeaderContainer);
        gameContainer.removeChild(nextGameButtonsContainer);
        gameContainer.removeChild(resultsContainer);
        gameContainer.appendChild(versionDisplayContainer);

        //reset gameContainer styles which were changed on results
        gameContainer.style.justifyContent = null;
        gameContainer.style.gap = null;
        gameContainer.style.paddingTop = null;

        // reset global variables for next game
        currentRound = 1;
        correctCount = 0;
        hintsRemaining = 2;
        currentSlide = 4;
        // clear the queue
        while (!cityQueue.isEmpty())
        {
            cityQueue.pop();
        }
        playGame();
    });

    // button 2
    nextGameButtonsContainer.childNodes[1].childNodes[1].addEventListener("click", () => {
        gameContainer.classList.remove("game-container-end"); // reset game container class
        gameContainer.classList.add("game-container-start");

        gameContainer.removeChild(resultsHeaderContainer);
        gameContainer.removeChild(nextGameButtonsContainer);
        gameContainer.removeChild(resultsContainer);

        //reset gameContainer styles which were changed on results
        gameContainer.style.justifyContent = null;
        gameContainer.style.gap = null;
        gameContainer.style.paddingTop = null;

        // choose correct version and display for next game
        switch(true) {
            case currentRegion == europe:
                currentRegion = usa;
                versionDisplayContainer.childNodes[1].textContent = "USA";
                versionDisplayContainer.childNodes[3].childNodes[0].src = "./images/usa-flag.webp";
                break;
            case currentRegion == usa:
                currentRegion = europe;
                versionDisplayContainer.childNodes[1].textContent = "Europe";
                versionDisplayContainer.childNodes[3].childNodes[0].src = "./images/europe-flag.gif";
                break;
        }
        gameContainer.appendChild(versionDisplayContainer);

        // reset global variables for next game
        currentRound = 1;
        correctCount = 0;
        hintsRemaining = 2;
        currentSlide = 4;
        // clear the queue
        while (!cityQueue.isEmpty())
        {
            cityQueue.pop();
        }
        playGame();
    });


}

// function to wrap the game up: display buttons for next game(s), etc. reset any necessary variables for next game.
function endGameLargeScreen() {
    
     // add event listeners for play again button (same version)
     newGameButtonSame.addEventListener("click", () => {
        gameContainer.classList.remove("game-container-end"); // reset game container class
        gameContainer.classList.add("game-container-start");

        // remove current display
        gameContainer.removeChild(leftEnd);
        gameContainer.removeChild(rightEnd);
        gameContainer.removeChild(results);

        // reset global variables for next game
        currentRound = 1;
        correctCount = 0;
        hintsRemaining = 2;
        // clear the queue
        while (!cityQueue.isEmpty())
        {
            cityQueue.pop();
        }
        playGame();
    });

    // add event listeners for play again button (different version 1)
    newGameButtonDiff1.addEventListener("click", () => {
        gameContainer.classList.remove("game-container-end"); // reset game container class
        gameContainer.classList.add("game-container-start");

        // set correct version for next game
        switch(newGameButtonDiff1.textContent.split(' ')[0]) {
            case "Europe":
                currentRegion = europe;
                break;
            case "USA":
                currentRegion = usa;
                break;
        }

        // remove current display
        gameContainer.removeChild(leftEnd);
        gameContainer.removeChild(rightEnd);
        gameContainer.removeChild(results);

        // reset global variables for next game
        currentRound = 1;
        correctCount = 0;
        hintsRemaining = 2;
        // clear the queue
        while (!cityQueue.isEmpty())
        {
            cityQueue.pop();
        }
        playGame();
    });

    // // add event listeners for play again button (different version 1)
    // newGameButtonDiff1.addEventListener("click", () => {
    //     gameContainer.classList.remove("game-container-end"); // reset game container class
    //     gameContainer.classList.add("game-container-start");

    //     // remove current display
    //     gameContainer.removeChild(leftEnd);
    //     gameContainer.removeChild(rightEnd);
    //     gameContainer.removeChild(results);

    //     // reset global variables for next game
    //     currentRound = 1;
    //     correctCount = 0;
    //     // clear the queue
    //     while (!cityQueue.isEmpty())
    //     {
    //         cityQueue.pop();
    //     }
    //     playGame();
    // });

    leftEnd.style.visibility = "visible";
    rightEnd.style.visibility = "visible";
}

function showResultsSmallScreen() {
    //remove pic and game panel
    gameContainer.removeChild(leftSide);
    gameContainer.removeChild(gamePanel);
    gameContainer.classList.remove("game-container-next"); // revert style
    gameContainer.classList.add("game-container-end");

    const resultsHeaderContainer = document.createElement("div");
    resultsHeaderContainer.id="resultsHeaderContainer";
    gameContainer.appendChild(resultsHeaderContainer);
    const calcContainer = document.createElement("div");
    calcContainer.id="calcContainer";
    resultsHeaderContainer.appendChild(calcContainer);
    calcContainer.appendChild(document.createElement("h1"));

// ----------- begin calulating container stuff (can remove everything between while not using calc part) ------------ //

    calcContainer.childNodes[0].textContent = "Calculating your results";
    // there's probably a way better way to do this but...
    let timer = 275;
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            setTimeout(() => {
                calcContainer.childNodes[0].textContent += ". ";
            }, timer);
            timer += 275;
        }
        timer += 50;
        if (i != 2) // leaves dots on final iteration
        {
            setTimeout(() => {
                calcContainer.childNodes[0].textContent = "Calculating your results";
            }, timer);
        }
        timer += 275;
    }
    setTimeout(() => {
        calcContainer.childNodes[0].textContent = "Calculating your results  ";
        calcContainer.childNodes[0].textContent += "      \u2714";

    }, timer);
    timer += 2000 // wait two second before next step (which is removing "Calculating your results..." and starting to display results)

// ----------- end calulating container stuff (can remove everything between while not using calc part) ------------ //
    // timer = 0; // <-- remove when replacing calculating
    setTimeout(() => {
        resultsHeaderContainer.style.marginTop = "0vh";
        gameContainer.style.justifyContent = "start";
        gameContainer.style.gap = "15%";
        gameContainer.style.paddingTop = "30px";
        calcContainer.style.justifyContent = "center";
        calcContainer.style.fontSize = "3.5vw";
        calcContainer.childNodes[0].textContent = "Let's see how you did...";

        // containers for all the results to be displayed

        const resultsContainer = document.createElement("div");
        resultsContainer.id="resultsContainer";
        // ^ container for holding results display and swivel buttons
        const resultsDisplay = document.createElement("div");
        resultsDisplay.id="resultsDisplay";
        resultsDisplay.style.visibility = "hidden"; // initialize it as hidden
        const evaluationType = document.createElement("div");
        evaluationType.id="evaluationType";
        evaluationType.appendChild(document.createElement("h3"));
        const evaluation = document.createElement("div");
        evaluation.id="evaluation";
        evaluation.appendChild(document.createElement("p"));
        resultsDisplay.appendChild(evaluationType);
        resultsDisplay.appendChild(evaluation);
        // ^ everything resultsDisplay
        const swivelButtonsContainer = document.createElement("div");
        swivelButtonsContainer.id="swivelButtonsContainer";
        swivelButtonsContainer.style.visibility = "hidden"; // initialize hidden
        swivelButtonsContainer.appendChild(document.createElement("button"));
        swivelButtonsContainer.appendChild(document.createElement("button"));
        swivelButtonsContainer.childNodes[0].textContent = '\u2190';
        swivelButtonsContainer.childNodes[1].textContent = '\u2192';
        swivelButtonsContainer.childNodes[1].style.opacity = "0.5"; // initialize grayed out
        // ^ everything swivel buttons
        resultsContainer.appendChild(resultsDisplay);
        resultsContainer.appendChild(swivelButtonsContainer);
        gameContainer.appendChild(resultsContainer);
        
        // initialize it with the first set of results (still hidden)
        evaluationType.childNodes[0].textContent = "Correct answers:";
        evaluation.childNodes[0].textContent = `${correctCount} / ${rounds}`;
        evaluation.childNodes[0].style.visibility = "hidden"; // initialize as hidden
        
    }, timer);

    // Display # of correct answers
    setTimeout(() => {
        resultsDisplay.style.visibility = "visible";
    }, timer);
    timer += 2200;
    // timer += 10; // testing
    setTimeout(() => {
        evaluation.childNodes[0].style.visibility = "visible";
    }, timer);


    // Display Score
    timer += 2200;
    // timer += 10; // testing
    setTimeout(() => {
        evaluation.childNodes[0].textContent = ""; // empty evaluation field
        evaluationType.childNodes[0].textContent = "Score:";
    }, timer);
    timer += 1500;
    // timer += 10; // testing
    setTimeout(() => {
        evaluation.childNodes[0].textContent = `${currentGrade}%`;
    }, timer);


    // Display Grade
    timer += 2200;
    // timer += 10; // testing
    setTimeout(() => {
        evaluation.childNodes[0].textContent = ""; // empty evaluation field
        evaluationType.childNodes[0].textContent = "Grade:";
    }, timer);
    timer += 1500;
    // timer += 10; // testing
    setTimeout(() => {
        evaluation.childNodes[0].textContent = `${convertToLetterGrade(currentGrade)}`;
        evaluation.childNodes[0].style.fontWeight = "800";
        evaluation.childNodes[0].style.fontSize = "14vw";
        // apply color to letter grade
        switch((convertToLetterGrade(currentGrade))[0])
        {
            case 'A':
                evaluation.childNodes[0].style.color = "rgb(18, 162, 18)";
                break;
            case 'B':
                evaluation.childNodes[0].style.color = "rgb(77, 177, 0)";
                break;
            case 'C':
                evaluation.childNodes[0].style.color = "rgb(208, 191, 0";
                evaluation.childNodes[0].style.textShadow = "1px 1px 2px black";
                break;
            case 'D':
                evaluation.childNodes[0].style.color = "orange";
                break;
            case 'F':
                evaluation.childNodes[0].style.color = "red";
                break;
        }
    }, timer);


    // Display Assessment
    timer += 2200;
    // timer += 10; // testing
    setTimeout(() => {
        evaluation.childNodes[0].textContent = ""; // empty evaluation field
        evaluationType.childNodes[0].textContent = "Assessment:";
        // on this one particularly, reset the font weight and text color
        evaluation.childNodes[0].style.fontWeight = null;
        evaluation.childNodes[0].style.color = null;
        evaluation.childNodes[0].style.fontSize = "4vw";
    }, timer);
    timer += 1500;
    // timer += 10; // testing
    setTimeout(() => {
        assessmentFeedback = generateFeedback(currentGrade)
        evaluation.childNodes[0].textContent = assessmentFeedback;
    }, timer);

    
    // Show swivel buttons
    timer += 4000;
    setTimeout(() => {
        swivelButtonsContainer.style.visibility = "visible";
        for (let i = 0; i < 2; i++)
        {
            swivelButtonsContainer.childNodes[i].addEventListener("click", () => {
                swivelResultSlide(i); // using i to determine direction 0 == left, 1 == right
            });
        }
        endGameSmallScreen();
    }, timer);

       
}

function showResultsLargeScreen() {
    //remove pic and game panel
    gameContainer.removeChild(leftSide);
    gameContainer.removeChild(gamePanel);
    gameContainer.classList.remove("game-container-next"); // revert style
    gameContainer.classList.add("game-container-end");

    const results = document.createElement("div");
    results.id="results";
    results.classList.add("results");
    gameContainer.appendChild(results);
    // append left and right side sections intially hidden
    displayNextGameButtons();
    const calculatingContainer = document.createElement("div"); // The header is kept in a div of its own to keep from moving when adding ". . ." (extra width)
    calculatingContainer.classList.add("calculating-container");
    results.appendChild(calculatingContainer);
    const calc = document.createElement("div");
    calc.id="calc";
    calculatingContainer.appendChild(calc);
    calc.appendChild(document.createElement("h1"));
    // calculatingContainer.appendChild(document.createElement("span"));
    calc.childNodes[0].textContent = "Calculating your results";
    // there's probably a way better way to do this but...
    let timer = 275;
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            setTimeout(() => {
                calc.childNodes[0].textContent += ". ";
            }, timer);
            timer += 275;
        }
        timer += 50;
        if (i != 2) // leaves dots on final iteration
        {
            setTimeout(() => {
                calc.childNodes[0].textContent = "Calculating your results";
            }, timer);
        }
        timer += 275;
    }
    setTimeout(() => {
        calc.childNodes[0].textContent = "Calculating your results  ";
        calc.childNodes[0].textContent += "      \u2714";

    }, timer);
    timer += 2000 // wait two second before next step (which is removing "Calculating your results..." and starting to display results)


    // next ->

    // - remove "Calculating your results..." (calculatingContainer)
    // - turn results into a 4 div (or however many lines of results) container, flex-direction column
    // - go ahead and put each line in each div so they're already there and don't move around, but initalize them all to visibility: hidden
    // - one by one, make them visible as you go down the line
    // * will need to continue using timer for this

    setTimeout(() => {
        results.removeChild(calculatingContainer);
        // header for results "Your results are in..."
        const resultsHeader = document.createElement("div");
        resultsHeader.id="resultsHeader";
        resultsHeader.appendChild(document.createElement("h1"));
        resultsHeader.childNodes[0].textContent = "Let's see how you did. . .";
        results.appendChild(resultsHeader);
        const resultsFirstSection = document.createElement("div");
        resultsFirstSection.style.visibility = "hidden";
        resultsFirstSection.classList.add("resultsFirstSection");
        resultsFirstSection.id="resultsFirstSection";
        results.appendChild(resultsFirstSection);
        // add 4 divs to resultsFirstSection container
        for (let i = 0; i < 4; i++)
        {
            const resultsSection = document.createElement("div");
            resultsSection.classList.add("results-sections"); // add the same css class to each div /hi
            resultsSection.id= `resultline${i + 1}`;
            const resultText = document.createElement("p"); // add a <p> into each div
            resultsSection.appendChild(resultText);
            resultsSection.appendChild(document.createElement("span")); // each line is split into to elements (a <p> appended by a <span>), allowing for
                                                                        // differences in style on the second part
            resultsSection.childNodes[1].style.visibility = "hidden"; // initialize each section to be hidden
            resultsFirstSection.appendChild(resultsSection);
            
            // set the appropriate content for each section (div)
            if (i == 0)
            {
                resultText.textContent = "You guessed:   ";
                let cityOrCountry;
                switch(currentRegion) {
                    case usa:
                        cityOrCountry = "cities";
                        break;
                    case europe:
                        cityOrCountry = "countries";
                        break;
                };
                resultsSection.childNodes[1].textContent = `${correctCount} out of ${rounds} ${cityOrCountry} correctly!`;
            }
            if (i == 1)
            {
                resultText.textContent = " Your score:   ";
                resultsSection.childNodes[1].textContent = `${currentGrade}%`;
            }
            if (i == 2)
            {
                resultText.textContent = "Overall grade:   ";
                resultsSection.childNodes[1].textContent = `${convertToLetterGrade(currentGrade)}`;
                resultsSection.childNodes[1].style.fontWeight = "800";
                // apply color to letter grade
                switch((convertToLetterGrade(currentGrade))[0])
                {
                    case 'A':
                        resultsSection.childNodes[1].style.color = "rgb(18, 162, 18)";
                        break;
                    case 'B':
                        resultsSection.childNodes[1].style.color = "rgb(77, 177, 0)";
                        break;
                    case 'C':
                        resultsSection.childNodes[1].style.color = "rgb(208, 191, 0";
                        resultsSection.childNodes[1].style.textShadow = "1px 1px 2px black";
                        break;
                    case 'D':
                        resultsSection.childNodes[1].style.color = "orange";
                        break;
                    case 'F':
                        resultsSection.childNodes[1].style.color = "red";
                        break;
                }
            }
            if (i == 3)
            {
                resultText.textContent = "Assessment:   ";
                resultsSection.childNodes[1].textContent = generateFeedback(currentGrade);
            }
        }
    }, timer);

    timer += 1000;
    setTimeout(() => {
        resultsFirstSection.style.visibility = "visible";
    }, timer);

    timer += 2300; // brief delay before displaying lines

    // display each result line one by one
    for (let i = 0; i < 4; i++)
    {   
        setTimeout(() => {
            resultsFirstSection.childNodes[i].childNodes[1].style.visibility = "visible";
        }, timer);
        timer += 2300; // 1.5 seconds between displaying each line
    }

    timer += 3000; // 2 second delay before calling final function of the game
    setTimeout(() => {
        endGameLargeScreen();
    }, timer);
}

function nextRound() {
    // update question number and display
    currentRound++;
    // let cityOrCountry;
    // switch(currentRegion) {
    //     case usa:
    //         cityOrCountry = "City";
    //         break;
    //     case europe:
    //         cityOrCountry = "Country";
    //         break;
    // }
    score.childNodes[0].textContent = `Round: ${currentRound} / ${rounds}`;

    // remove most recent city from the queue
    cityQueue.pop();

    // remove answer display
    // gamePanel.removeChild(nextq);

    // add question display back to game panel
    displayQuestion();

    // make hint section visible again
    // if (hintsRemaining > 0)
    // {
    //     document.getElementById("hints").style.visibility = "visible";
    // }
    const theseHints = document.getElementById("hints");
    if (theseHints) {
        document.getElementById("hints").style.visibility = "visible";
    }

    setupNewRound();
}

function evaluateAnswer(correct) {
    const mediaQuery = window.matchMedia('(min-width: 601px)');

    // temporarily hide hints section
    const theHints = document.getElementById("hints");
    if (theHints) {
        theHints.style.visibility = "hidden";
    }
    // temporarily remove question and buttons
    gamePanel.removeChild(questions);

    // display answer ("correct" or "incorrect") and add button for going to next question
    const answer = document.createElement("div");
    answer.id = "answer";
    answer.appendChild(document.createElement("h2"));
    answer.appendChild(document.createElement("p"));
    
    if (mediaQuery.matches) {
        gamePanel.insertBefore(answer, hints);
    }
    else {
        gamePanel.appendChild(answer);
    }

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

        if (mediaQuery.matches) {
            gamePanel.style.background = "linear-gradient(to top right, white, 1%, green)";
        }
        else {
            gameContainer.style.background = "linear-gradient(to top, rgb(55,55,55), 2%, rgb(0, 128, 0, 0.9))";
        }
        correctCount++;

    }
    else
    {
        let response = WrongResponses[randomIndex(WrongResponses.length)]; // random response for wrong answer
        answer.childNodes[0].textContent = response;
        answer.childNodes[1].textContent =  `That's ${cityQueue.peek().name}.`;
        answer.style.justifyContent = "space-around"; // when there're two text elements
        if (mediaQuery.matches) {
            gamePanel.style.background = "linear-gradient(to top left, white, 0%, rgb(178, 13, 13))";
        }
        else {
            gameContainer.style.background = "linear-gradient(to top, rgb(55,55,55), 2%, rgb(178, 13, 13))";
        }
        
    }
    // update display of current grade
    currentGrade = Math.round((correctCount / currentRound) * 100);
    let gradeColor; // for giving the grade a corresponding color
    switch (true) {
        case currentGrade >= 80:
            gradeColor = "rgb(18, 162, 18)";
            break;
        case currentGrade >= 60:
            gradeColor = "orange";
            break;
        case currentGrade < 60:
            gradeColor = "red";
            break;
    }
    score.childNodes[1].textContent = `Score: ${currentGrade}%`;
    // score.childNodes[1].style.color = gradeColor; // this colors the whole line, need to put the actual percentage in a span and color only it
    
    // Logic for any round except the last one
    if (currentRound != rounds)
    {
        // 2.5 second delay from showing answer with particular color to reverting color and diplaying "next city" button
        // setTimeout(() => {
        //     gamePanel.removeChild(answer);
        //     const nextQ = document.createElement("div");
        //     nextQ.classList.add("next-question-button-container");
        //     nextQ.id = "nextq";
        //     nextQ.appendChild(nextQuestionButton);
        //     gamePanel.insertBefore(nextQ, hints);
        //     gamePanel.style.background = null;
        // }, 2500);

        // nextQuestionButton.addEventListener("click", () => {
        //     nextRound();
        // })


        // goes straight to next question after 3 seconds. loses the next question button
        setTimeout(() => {
            gamePanel.removeChild(answer);
            if (mediaQuery.matches) {
                gamePanel.style.background = null;
            }
            else {
                gameContainer.style.background = null;
            }
            nextRound();
        }, 2300);
    }
    else // On the last round
    {

        setTimeout(() => {
            if (mediaQuery.matches) { // for screen size > 600px
                showResultsLargeScreen();
            }
            else { // for screen size <= 600px
                gameContainer.style.background = null;
                showResultsSmallScreen();
            }
            
        }, 3200);
    }
}

function displayQuestion() {
    /* --- creating the elements section --- (appending comes after) */
    const mediaQuery = window.matchMedia('(min-width: 601px)');

    const questions = document.createElement("div");
    questions.id = "questions";
    questions.classList.add("questions");
    
    let choices = document.createElement("div");
    choices.id = "choices";
    choices.classList.add("choices");
    // add 4 answer choice buttons (initialized here with no text content)
    for (let i = 0; i < 4; i++)
    {
        choices.appendChild(document.createElement("button"));
    }

    // answer choice buttons - on click, show answer
    const buttons = choices.childNodes;
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let correctOrIncorrect = button.textContent == cityQueue.peek().name; // bool determining if answer was correct or incorrect
            evaluateAnswer(correctOrIncorrect);
        })
    })

    /* --- appending things section --- */

    

    // *** Include "`Which ${cityOrCountry} is this?'" only if screen size > 600px
    if (mediaQuery.matches) {
        gamePanel.insertBefore(questions, hints);
        questions.appendChild(document.createElement("h2")); // **** this should be if screen size
        let cityOrCountry;
        switch(currentRegion) {
            case usa:
                cityOrCountry = "city";
                break;
            case europe:
                cityOrCountry = "country";
                break;
        }
        questions.childNodes[0].textContent = `Which ${cityOrCountry} is this?`;
        questions.childNodes[0].style.fontSize = "1.75rem";
    }
    else {
        gamePanel.appendChild(questions);
    }
    
    questions.appendChild(choices);
}

function setupGameDisplay()
{
    // Setup game container
    const gameContainer = document.querySelector(".game-container-start");
    gameContainer.id="gameContainer";
    

    // Briefly display the version which was chosen before starting the game
    // const versionDisplayContainer = document.getElementById("versionDisplayContainer"); // hello there1

    setTimeout(() => {
        /* --- creating new elements section --- (appending comes after) */

        // remove version display
        gameContainer.removeChild(versionDisplayContainer);
        gameContainer.classList.remove("game-container-start");
        gameContainer.classList.add("game-container-next");

        // create leftside
        const leftSide = document.createElement("div"); // add picture section
        leftSide.classList.add("city-image");
        leftSide.id="leftSide";
        
        // create img container
        const cityPic = document.createElement("img");
        cityPic.id="cityPic";
        randomImageIndex = randomIndex(cityQueue.peek().imageArray.length); // Set picture to the correct answer city (selecting a random one from its imageArray)
        let firstPic = cityQueue.peek().imageArray[randomImageIndex];
        cityPic.src=firstPic;

        // create right side
        const gamePanel = document.createElement("div");
        gamePanel.classList.add("game-panel");
        gamePanel.id="gamePanel";
        


        // create score section
        let score = document.createElement("div");
        score.id = "score"; /* id allows ability to access dynamically created dom object. i don't think we can reference globally though or it will throw error
                            from the start. will essentially have to pass around through functions once game starts it seems. For example create the game panel here
                            and then once it's time to initalize the queue and buttons and whatnot, we should be able to create a separate function for that,
                            call it at the end of this function and then be able to access the dynamically created dom elements from there since they will now
                            be in the dom. */
        score.classList.add("score");
        let questionNumber = document.createElement("p");
        questionNumber.textContent = `Round: 1 / ${rounds}`;
        let grade = document.createElement("p");
        grade.textContent = "Score: --";


        // create hints section
        let hints = document.createElement("div");
        hints.id = "hints";
        hints.classList.add("hints");
        let hintButton = document.createElement("button");
        hintButton.id="hintButton";
        hintButton.textContent = "Hint?";
        let numHints = document.createElement("p");
        numHints.textContent = `${hintsRemaining} remaining`;

        hintButton.addEventListener("click", () => {
            hintsRemaining--;
            if (hintsRemaining >= 0)
            {
                hints.style.visibility = "hidden";
                giveHint();
            }
        })

        /* --- appending things section --- */

        const mediaQuery = window.matchMedia('(min-width: 601px)');

        if (mediaQuery.matches) { // if window size above 600px
            // appending left side
            gameContainer.appendChild(leftSide);
            leftSide.appendChild(cityPic);

            // appending game panel
            gameContainer.appendChild(gamePanel);

            // appending score
            gamePanel.appendChild(score);
            score.appendChild(questionNumber);
            score.appendChild(grade);

            // appending hints section
            gamePanel.appendChild(hints);
            hints.appendChild(hintButton);
            hints.appendChild(numHints);
        }
        else { // if window size <= 600px
            // appending top
            gameContainer.appendChild(leftSide);
            leftSide.appendChild(score);
            score.appendChild(questionNumber);
            score.appendChild(grade);
            leftSide.appendChild(cityPic);

            // appending bottom
            gameContainer.appendChild(gamePanel);
            // gamePanel.appendChild(hints);
            // hints.appendChild(hintButton); // removing hints on this screen size for now
            // hints.appendChild(numHints);
        }

        


        // Display question and choice buttons
        displayQuestion();
    }, 2000); // 2 second display of version before moving on
}

function setupCitiesQueue() {
    // // Setup the queue of randomized cities/countries for new game
    let numOfCities = currentRegion.length;
    let usedIndexes = []; // for storing indexes which were already used
    for (let i = 0; i < rounds; i++)
    {
        let randomCityIndex;
        do {randomCityIndex = randomIndex(numOfCities);
        }
        while (indexAlreadyUsed(usedIndexes, randomCityIndex));
        usedIndexes.push(randomCityIndex);
        cityQueue.push(currentRegion[randomCityIndex]);
    }
}

function setupNewRound() {
    // Set picture to the correct answer city (selecting a random one from its imageArray)
    if (currentRound != 1) // pic is already set by this point if it's the first round
    {
        randomImageIndex = randomIndex(cityQueue.peek().imageArray.length);
        let cityPic = cityQueue.peek().imageArray[randomImageIndex];
        let picContainer = document.getElementById("cityPic");
        picContainer.src=cityPic;
    }

    // Set random answer choices
    // Start with ensuring that the correct city is in one of them, a random one;
    let answerButtonIndex = randomIndex(4);
    choices.childNodes[answerButtonIndex].textContent = cityQueue.peek().name;

    let usedCityIndexes = []; // for storing city indexes which were already used
    
    // push index of the answer city to the usedIndexes array so it is not used below for another answer choice button
    for (let i = 0; i < currentRegion.length; i++)
    {
        if (currentRegion[i].name == cityQueue.peek().name)
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
            do {randomCityIndex = randomIndex(currentRegion.length);
            }
            while (indexAlreadyUsed(usedCityIndexes, randomCityIndex));
            usedCityIndexes.push(randomCityIndex);
            choices.childNodes[i].textContent = currentRegion[randomCityIndex].name;
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
    setTimeout(() => {
        setupNewRound();
    }, 2000);

}

// // Start new game button
// const buttonsContainer = document.querySelector(".game-buttons");
// if (buttonsContainer) { // so this doesn't try to run on game page
//     buttonsContainer.id="buttonsContainer";
// const buttonsList = buttonsContainer.querySelectorAll("div");

// const usaButton = buttonsList[1].querySelector("button");
// const euroButton = buttonsList[0].querySelector("button");
// const worldwideButton = buttonsList[2].querySelector("button");

// // U.S. cities button start game on click


// usaButton.addEventListener("click", () => {
//     currentRegion = usa;
//     playGame();
// })

// euroButton.addEventListener("click", () => {
//     currentRegion = europe;
//     playGame();
// })
// }

const versionDisplayContainer = document.getElementById("versionDisplayContainer");
versionDisplayContainer.id="versionDisplayContainer";
let region = versionDisplayContainer.childNodes[1].textContent;
switch(true) {
    case region == "Europe":
        currentRegion = europe;
        break;
    case region == "USA":
        currentRegion = usa;
        break;
}
playGame();