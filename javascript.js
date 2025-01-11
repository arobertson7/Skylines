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
const la = new City("Los Angeles", ["./images/la1.avif", "./images/la2.jpg", "./images/la3.jpg", "./images/la4.jpg", "./images/la5.jpeg", "./images/la6.jpeg", "./images/la7.jpg", "./images/la8.jpg", "./images/la9.webp"], '\u266B' + " Californiaaa.. knows how to party.." + '\u266B' + ". In the cityyyy of __. " + '\u266B');
const sf = new City("San Francisco", ["./images/sf1.jpg", "./images/sf2.jpg", "./images/sf3.jpeg", "./images/sf4.jpg", "./images/sf5.webp", "./images/sf6.webp"], "They named their most famous bridge with a different color than it actually is.");
const seattle = new City("Seattle", ["./images/seattle1.jpg", "./images/seattle2.jpg", "./images/seattle3.jpg", "./images/seattle4.webp", "./images/seattle5.jpg", "./images/seattle6.jpg"], "That's the space needle.");
const chicago = new City("Chicago", ["./images/chicago1.avif", "./images/chicago2.jpg", "./images/chicago3.webp", "./images/chicago4.webp", "./images/chicago5.webp", "./images/chicago6.jpg", "./images/chicago7.jpg"], "chicago hint");
const lv = new City("Las Vegas", ["./images/lv1.avif", "./images/lv2.jpg", "./images/lv3.jpg", "./images/lv4.jpg", "./images/lv5.webp", "./images/lv6.jpg", "./images/lv7.avif"], "lv hint");
const philly = new City("Philadelphia", ["./images/philly1.jpg", "./images/philly2.jpg", "./images/philly3.jpg", "./images/philly4.jpg", "./images/philly5.jpg", "./images/philly6.jpg", "./images/philly7.avif"], "philly hint");
const dc = new City("Washington D.C.", ["./images/dc1.webp", "./images/dc2.jpeg", "./images/dc3.webp", "./images/dc4.jpg", "./images/dc5.jpeg", "./images/dc6.jpg", "./images/dc7.jpg"], "dc hint");
const miami = new City("Miami", ["./images/miami1.avif", "./images/miami2.jpeg", "./images/miami3.jpg", "./images/miami4.jpg", "./images/miami5.webp", "./images/miami6.webp"], "miami hint");
const atl = new City("Atlanta", ["./images/atl1.webp", "./images/atl2.jpg", "./images/atl3.jpg", "./images/atl4.webp", "./images/atl5.jpg", "./images/atl6.jpg", "./images/atl7.jpg"], "atl hint");
const denver = new City("Denver", ["./images/denver1.avif", "./images/denver2.jpg", "./images/denver3.jpg", "./images/denver4.webp", "./images/denver5.jpeg", "./images/denver6.jpg"], "denver hint");
const phx = new City("Phoenix", ["./images/phx1.jpg", "./images/phx2.jpg", "./images/phx3.png", "./images/phx4.jpg", "./images/phx5.webp", "./images/phx6.jpg"], "phx hint");
const boston = new City("Boston", ["./images/boston1.jpg", "./images/boston2.jpg", "./images/boston3.jpg", "./images/boston4.webp", "./images/boston5.webp", "./images/boston6.webp", "./images/boston7.jpg"], "boston hint");
const nash = new City("Nashville", ["./images/nash1.jpg", "./images/nash2.avif", "./images/nash3.jpg", "./images/nash4.jpg", "./images/nash5.jpg"], "nash hint");
const stl = new City("St. Louis", ["./images/stl1.webp", "./images/stl2.jpg", "./images/stl3.jpg", "./images/stl4.webp", "./images/stl5.jpg"], "stl hint");
const portland = new City("Portland", ["./images/portland1.webp", "./images/portland2.webp", "./images/portland3.jpg", "./images/portland4.jpg", "./images/portland5.jpg", "./images/portland6.jpg"], "portland hint");
const knox = new City("Knoxville", ["./images/knox1.jpg", "./images/knox2.jpg", "./images/knox3.webp", "./images/knox4.jpg", "./images/knox5.jpg"], "knox hint");
// const cross = new City("Crossville, Tennessee", ["./images/cross1.jpg"], "cross hint");
const newOrleans = new City("New Orleans", ["./images/new-orleans1.avif", "./images/new-orleans2.webp", "./images/new-orleans3.jpg", "./images/new-orleans4.avif", "./images/new-orleans5.jpg"], "new orleans hint");
const sanDiego = new City("San Diego", ["./images/sd1.avif", "./images/sd2.jpeg", "./images/sd3.jpg", "./images/sd4.jpg", "./images/sd5.jpg"], "sd hint");
const honolulu = new City("Honolulu", ["./images/honolulu1.jpg", "./images/honolulu2.webp", "./images/honolulu3.jpg", "./images/honolulu4.jpg", "./images/honolulu5.jpg", "./images/honolulu6.jpg"], "honolulu hint");
const dallas = new City("Dallas", ["./images/dallas1.jpeg", "./images/dallas2.avif", "./images/dallas3.jpeg", "./images/dallas4.jpg", "./images/dallas5.avif"], "dallas hint");
const charleston = new City("Charleston", ["./images/charleston1.jpg", "./images/charleston2.jpg", "./images/charleston3.jpg", "./images/charleston4.jpg", "./images/charleston5.jpg"], "charleston hint");
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
const germany = new City("Germany", ["./images/germany1.avif", "./images/germany2.avif", "./images/germany3.jpg", "./images/germany4.jpg", "./images/germany5.jpg", "./images/germany6.jpg", "./images/germany7.jpg", "./images/germany8.jpg", "./images/germany9.jpg", "./images/germany10.jpg", "./images/germany11.jpg", "./images/germany12.jpg", "./images/germany13.png", "./images/germany14.jpg", "./images/germany15.jpeg", "./images/germany16.jpg", "./images/germany17.jpg", "./images/germany18.jpg"], "germany hint");
const france = new City("France", ["./images/france1.jpg", "./images/france2.webp", "./images/france3.jpeg", "./images/france4.webp", "./images/france5.webp", "./images/france6.webp", "./images/france7.webp", "./images/france8.avif", "./images/france9.webp", "./images/france10.jpg"], "france hint");
const england = new City("England", ["./images/england1.jpg", "./images/england2.jpg", "./images/england3.webp", "./images/england4.webp", "./images/england5.jpg", "./images/england6.avif", "./images/england7.jpg", "./images/england8.jpeg", "./images/england9.webp", "./images/england10.jpg", "./images/england11.jpg", "./images/england12.avif"], "england hint");
const spain = new City("Spain", ["./images/spain1.webp", "./images/spain2.jpg", "./images/spain3.jpeg", "./images/spain4.avif", "./images/spain5.jpg", "./images/spain6.webp", './images/spain7.jpg', "./images/spain8.jpg", './images/spain9.jpg', "./images/spain10.jpg"], "spain hint");
const norway = new City("Norway", ["./images/norway1.jpg", "./images/norway2.webp", "./images/norway3.jpg", "./images/norway4.jpg", "./images/norway5.jpg", "./images/norway6.jpg", "./images/norway7.webp", "./images/norway8.jpg", "./images/norway9.jpg", "./images/norway10.jpg"], "norway hint");
const denmark = new City("Denmark", ["./images/denmark1.jpg", "./images/denmark2.jpg", "./images/denmark3.jpg", "./images/denmark4.webp", "./images/denmark5.jpg", "./images/denmark6.jpg", "./images/denmark7.jpg", "./images/denmark8.jpeg", "./images/denmark9.avif", "./images/denmark10.jpg", "./images/denmark11.webp"], "denmark hint");
const netherlands = new City("The Netherlands", ["./images/netherlands1.jpg", "./images/netherlands2.jpg", "./images/netherlands3.webp", "./images/netherlands4.jpeg", "./images/netherlands5.jpg", "./images/netherlands6.jpeg", "./images/netherlands7.jpg", "./images/netherlands8.jpg", "./images/netherlands9.jpg", "./images/netherlands10.jpg"], "netherlands hint");
const czech = new City("Czech Republic", ["./images/czech1.jpg", "./images/czech2.jpg", "./images/czech3.jpg", "./images/czech4.webp", "./images/czech5.jpeg", "./images/czech6.jpg", "./images/czech7.jpg", "./images/czech8.jpg", "./images/czech9.jpg", "./images/czech10.jpg", "./images/czech11.jpeg"], "czech republic hint");
const portugal = new City("Portugal", ["./images/portugal1.webp", "./images/portugal2.jpg", "./images/portugal3.jpg", "./images/portugal4.jpg", "./images/portugal5.jpg", "./images/portugal6.jpg", "./images/portugal7.webp", "./images/portugal8.jpg", "./images/portugal9.jpg", "./images/portugal10.webp"], "portugal hint");
const austria = new City("Austria", ["./images/austria1.jpg", "./images/austria2.jpg", "./images/austria3.jpg", "./images/austria4.webp", "./images/austria5.jpeg", "./images/austria6.avif", "./images/austria7.jpg", "./images/austria8.webp", "./images/austria9.jpg", "./images/austria10.jpg", "./images/austria11.webp"], "austria hint");
const switzerland = new City("Switzerland", ["./images/switzerland1.jpg", "./images/switzerland2.jpg", "./images/switzerland3.jpeg", "./images/switzerland4.jpg", "./images/switzerland5.jpg", "./images/switzerland6.jpg", "./images/switzerland7.webp", "./images/switzerland8.webp", "./images/switzerland9.jpg", "./images/switzerland10.jpg", "./images/switzerland11.jpg", './images/switzerland12.jpg'], "switzerland hint");
const italy = new City("Italy", ["./images/italy1.webp", "./images/italy2.jpeg", "./images/italy3.jpg", "./images/italy4.jpg", "./images/italy5.webp", "./images/italy6.webp", "./images/italy7.jpeg", "./images/italy8.jpeg", "./images/italy9.jpg", "./images/italy10.jpeg", "./images/italy11.jpg", "./images/italy12.jpg", "./images/italy13.jpg", "./images/italy14.jpg", "./images/italy15.avif", "./images/italy16.webp"], "italy hint");
const belgium = new City();
const greece = new City();
const ireland = new City();
const sweden = new City();
const finland = new City();
const hungary = new City();
const poland = new City();


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
const rounds = 8;
// placeholder for current number of correct answers
let correctCount = 0;
// placeholder for current question number
let currentRound = 1;
// current grade (percentage out of 100)
let currentGrade = Math.round((correctCount / currentRound) * 100);
// currently using a global var for tracking index of currently used photo so able to show a different one when hint button is clicked
let randomImageIndex;
// currently using global vars for hint functionality
let hintsRemaining = 3;
// global variable for keeping track of which 'result' slide we're on (for swivel buttons)
// initialized to 4 because that's slide that is up when the swivel buttons appear
let currentSlide = 4;
// global variable for storing current assessment feedback
let assessmentFeedback = "";
// global variable for tracking how many games have been played (initiated)
let gamesPlayed = 0;
// bool used for "hints left" display on small screen
let hintUsed = false;


// an array holding various responses to display when answer is correct
const correctResponses = ["Correct!", "Impressive!", "Nice!", "Well done.", "Bravo!", "Nicely done.", "World Traveler", "Wunderbar!"];

const WrongResponses = ["Nope!", "Not this time!", "Next try!", "Nö", "Not quite!"];

const A_Plus_Responses = ["Geography Genius! You've officially reached 'World Traveler' status. If there were a Nobel Prize for geography, you'd have at least three by now. The UN should call you for advice!",
    "Top of the Class! You've got the geography skills of a well-traveled detective! Sherlock Holmes would call you for tips on finding obscure countries. You're basically the Indiana Jones of map-reading.",
    "Are You a Map? You've navigated your way to an A+, making even Google Maps jealous. If there's a lost city of Atlantis, you'd probably find it before breakfast.",
    "Geography? More like Ge-uh, this is easy. You've crushed this quiz like you were born with a passport in one hand and a globe in the other. NASA is considering hiring you as a consultant.",
    "World-Class Expert! A+! You've officially unlocked 'Superhuman Geography Powers'. At this rate, the only continent you haven't visited is Antarctica..."];
const A_Responses = [  // "Nice job! You're officially a geography prodigy—at least until someone asks you about Antarctica. But hey, nobody's perfect, right?",
    "A solid A! You've got a brain like Google Maps... if Google Maps had a caffeine addiction. Keep it up, and you'll be leading world tours in no time!",
    // "Impressive! You know your cities so well, I bet you could give a TED Talk on the Eiffel Tower. Maybe not a *great* TED Talk, but still.",
    "Well done! You're just a few maps away from being the human equivalent of Google Earth. Still need to work on those street names, though.",
    "You nailed it! You've got more geography knowledge than a globe, and you don't even need to spin yourself to show off. But A+ is still calling your name!",
    "You've been around, huh? You know your cities better than most! Outstanding performance.",
    "You've clearly racked up some miles. You deserve a vacation after that performance. Go wild with all those travel rewards!"];
const B_Responses = [  "Great job! You've got a solid grip on geography, but you're just one step away from being a map wizard. Keep going, the A's are within reach!",
    "Nice work! You're doing awesome—think of this as a high-five from the geography gods. A little more effort and you'll be in the A+ club before you know it!",
    "Well done! A B is a great score, and you've got a fantastic base of knowledge. A few more cities and you'll be on top of the world!",
    "B-B-B-eautiful performance. You've been watching the travel channel, haven't you?",
    "B? You're basically the GPS we all turn to when Google Maps glitches!",
    "B? You're like the world's most knowledgeable tourist. Soon you'll be giving guided tours!"];
const C_Responses = [  // "Not bad! You've got a solid start, but you might want to swap your world map for a pair of glasses. A little more effort, and you'll be cruising through this!",
    "You're halfway there! A C means you're on the map, but not quite the one showing the best tourist spots. Keep at it, and you'll level up in no time!",
    "You've got the basics down! Now it's time to dust off that globe and get serious—there's a whole world waiting for you to explore!",
    "Alright, you're not quite a geography master yet, but hey, you're closer than most people who just use maps for decoration. A little more work and you'll get there!",
    // "Decent start! A C means you know *some* geography, but not enough to impress your friends at trivia night. But don't worry, it's not too late to level up!",
    "Okay, okay. You know your cities decently well, but you still have some room to grow. But hey, that's the fun part right?"];
const D_Responses = [// "D? Well, at least you know the *Earth* exists, that's a start!",
    "A D?! Looks like you're a world traveler… but you've lost your passport. Let's find it and bump that grade up. Give it another shot!",
    "D? Hey, you're not lost… you just haven't found the right map yet.",
    // "D? You're not quite lost in the world yet, but you're definitely wandering off track!",
    // "D? Hey, you *almost* know where you are. Just maybe not on the map.",
    // "D?! You've got a better chance of finding Waldo than finding all the countries.",
    // "D?! You've definitely been to Earth. But as for the rest of the globe… unclear.",
    // "D? You might not know where you're going, but at least you're going somewhere!",
    "D? At least you didn't fail! That's a win in some countries, right?"];
const F_Responses = [// "Well... that was *something*, wasn't it? You've got the geography knowledge of a potato. But hey, potatoes can grow into French fries with a little time. Try again!",
    // "You should really get out of the house more often! That was hard to watch.",
    // "Yikes... I hope you at least got a good price. On that rock you've been living under!",
    "Yikes. It's like you were playing pin the tail on the country. But don't worry, that was clearly not your best. Next time, you're gonna nail it!",
    "Well, that was a geography disaster of epic proportions. But hey, every legend has their setbacks. Grab a globe and let's aim for a passing grade!",
    "Well hey, you can't win em all. The A's wouldn't be so rewarding if we didn't pick up an F every now and then!"];

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
        case (89 <= grade && grade <= 100):
            return "A+";
            break;
        case (76 <= grade && grade <= 88):
            return "A";
            break;
        case (51 <= grade && grade <= 75):
            return "B";
            break;
        case (26 <= grade && grade <= 50):
            return "C";
            break;
        case (14 <= grade && grade <= 25):
            return "D";
            break;
        case (grade < 14):
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
        case "B":
            return B_Responses[randomIndex(B_Responses.length)];
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
    const mediaQuery = window.matchMedia('(min-width: 601px)');
    if (hintsRemaining >= 0) // number corresponds to how many hints remain after this one
    {
        // *** the below code gives a secong picture

        // let differentImageIndex;
        // do {
        //     differentImageIndex = randomIndex(cityQueue.peek().imageArray.length)
        // }
        // while (differentImageIndex == randomImageIndex);
        // let newPic = cityQueue.peek().imageArray[differentImageIndex];
        // cityPic.src= newPic;

        // for giving 50/50 hint
        let usedIndexes = [];
        for (let i = 0; i < 4; i++) {
            if (choices.childNodes[i].textContent == cityQueue.peek().name) {
                usedIndexes.push(i);
            }
        }
        for (let i = 0; i < 2; i++) { // 2 iterations for finding 2 buttons that aren't answer
            let randomButtonIndex;
            do {
                randomButtonIndex = randomIndex(4);
            }
            while (indexAlreadyUsed(usedIndexes, randomButtonIndex));
            let button = choices.childNodes[randomButtonIndex];
            
            // remove event listener via removing button and replacing with an indentical. neither abortSignal nor removeEventListener
            let replacement = document.createElement("button");
            replacement.textContent = button.textContent;
            choices.removeChild(button);
            switch(true) {
                case randomButtonIndex == 0:
                    choices.insertBefore(replacement, choices.childNodes[0]);
                    break;
                case randomButtonIndex == 1:
                    choices.insertBefore(replacement, choices.childNodes[1]);
                    break;
                case randomButtonIndex == 2:
                    choices.insertBefore(replacement, choices.childNodes[2]);
                    break;
                case randomButtonIndex == 3:
                    choices.appendChild(replacement);
                    break;
            }
            replacement.style.opacity = "0.3";
            usedIndexes.push(randomButtonIndex);
        }

        switch(true) {
            case hintsRemaining == 2:
                hintButton.style.background = "linear-gradient(to right, rgb(203, 186, 0), 66%, black, 66%, black, 97%, gray)";
                hintButton.textContent = "2 remaining";
                if (!mediaQuery.matches) {
                    hintButton.textContent = "Hint";
                }
                hintUsed = true;
                break
            case hintsRemaining == 1:
                hintButton.textContent = "1 left...";
                hintButton.style.background = "linear-gradient(to right, orange, 29%, black, 29%, black, 97%, gray)";
                if (!mediaQuery.matches) {
                    hintButton.textContent = "Hint";
                }
                hintUsed = true;
                break;
            case hintsRemaining == 0:
                hintButton.textContent = "All out..";
                if (!mediaQuery.matches) {
                    hintButton.textContent = "empty";
                }
                hintButton.style.background = "linear-gradient(to right, red, 4%, black, 4%, black, 97%, gray)";
                break;
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
            evaluation.childNodes[0].style.textShadow = "1px 1px 2px black";
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
            evaluation.childNodes[0].style.textShadow = null;
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
            evaluation.childNodes[0].style.textShadow = "1px 1px 2px black";
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
            evaluation.childNodes[0].style.textShadow = null;
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

    // Play again button - same version
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
    newGameButtonSame.classList.add("new-game-button");
    switch(true) {
        case currentRegion == usa:
            newGameButtonSame.style.backgroundImage = "url('./images/usa-flag2.png')";
            break;
        case currentRegion == europe:
            newGameButtonSame.style.backgroundImage = "url('./images/eu-flag.png')";
            break;
    }
    leftSideDiv.appendChild(newGameButtonSame);

    // Play again buttons - other versions
    const rightSideDiv = document.createElement("div");
    rightEnd.appendChild(rightSideDiv);
    rightSideDiv.id="rightSideDiv";
    rightSideDiv.appendChild(document.createElement("h3"));
    rightSideDiv.childNodes[0].textContent = "Or..."; // "Broaden your horizons"

    const otherVersionsContainer = document.createElement("div");
    otherVersionsContainer.id = "otherVersionsContainer";
    rightSideDiv.appendChild(otherVersionsContainer);

    const diffGame1 = document.createElement("div");
    const diffGame2 = document.createElement("div");
    otherVersionsContainer.appendChild(diffGame1);
    otherVersionsContainer.appendChild(diffGame2);
    diffGame1.classList.add("diffGameContainer");
    diffGame2.classList.add("diffGameContainer");
    diffGame1.appendChild(document.createElement("label"));
    diffGame2.appendChild(document.createElement("label"));
    const newGameButtonDiff1 = document.createElement("button"); // different version 1
    newGameButtonDiff1.classList.add("new-game-button");
    newGameButtonDiff1.id="newGameButtonDiff1";
    const newGameButtonDiff2 = document.createElement("button"); // different version 2
    newGameButtonDiff2.classList.add("new-game-button");
    newGameButtonDiff2.id="newGameButtonDiff2";
    diffGame1.appendChild(newGameButtonDiff1);
    diffGame2.appendChild(newGameButtonDiff2);

    switch(true) {
        case currentRegion == europe:
            diffGame1.childNodes[0].textContent = "USA";
            newGameButtonDiff1.style.backgroundImage = 'url("./images/usa-flag2.png")';
            diffGame2.childNodes[0].textContent = "Worldwide";
            newGameButtonDiff2.style.backgroundImage = 'url("./images/world-flag.gif")';
            break;
        case currentRegion == usa:
            diffGame1.childNodes[0].textContent = "Europe";
            newGameButtonDiff1.style.backgroundImage = 'url("./images/eu-flag.png")';
            diffGame2.childNodes[0].textContent = "Worldwide";
            newGameButtonDiff2.style.backgroundImage = 'url("./images/world-flag.gif")';
            break;
    }
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

    gameContainer.insertBefore(nextGameButtonsContainer, resultsContainer);
    nextGameButtonsContainer.style.visibility = "hidden";
    // give a second or so before adding new game buttons
    let timer = 3000;
    setTimeout(() => {
        resultsHeaderContainer.style.visibility = "hidden";
        nextGameButtonsContainer.style.visibility = "visible";
        // gameContainer.insertBefore(nextGameButtonsContainer, resultsContainer);
    }, timer);

    // one by one light up the next game buttons
    timer += 1500;
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
                break;
            case currentRegion == usa:
                currentRegion = europe;
                break;
        }

        // reset global variables for next game
        currentRound = 1;
        correctCount = 0;
        hintsRemaining = 3;
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
        hintsRemaining = 3;
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
        switch(true) {
            case currentRegion == europe:
                currentRegion = usa;
                break;
            case currentRegion == usa:
                currentRegion = europe;
                break;
        }

        // remove current display
        gameContainer.removeChild(leftEnd);
        gameContainer.removeChild(rightEnd);
        gameContainer.removeChild(results);

        // reset global variables for next game
        currentRound = 1;
        correctCount = 0;
        hintsRemaining = 3;
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
    // 4275
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
        evaluation.childNodes[0].style.textShadow = "1px 1px 2px black";
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
        evaluation.childNodes[0].style.textShadow = null;
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
    let timer = 200;
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            setTimeout(() => {
                calc.childNodes[0].textContent += ". ";
            }, timer);
            timer += 200;
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

    timer += 2000; // 2 second delay before calling final function of the game
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

    // temporarily hide hints section on big screen
    if (mediaQuery.matches) {
        hints.style.visibility = "hidden";
    }
    // temporarily remove question and buttons
    gamePanel.removeChild(questions);

    // shortcut for temporarily disabling hint button during answer display on small screen
    let hintsHolder = hintsRemaining;
    hintsRemaining = -1;

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
    if (mediaQuery.matches) {
        score.childNodes[1].textContent = `Score: ${currentGrade}%`;
    }
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


        // goes straight to next question after 3 seconds. loses the next question button.
        setTimeout(() => {
            gamePanel.removeChild(answer);
            if (mediaQuery.matches) {
                gamePanel.style.background = null;
            }
            else {
                gameContainer.style.background = null;
            }
            hintsRemaining = hintsHolder;
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
        choices.childNodes[i].classList.add("choiceButtonHover");
    }
    


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
    }
    else {
        gamePanel.appendChild(questions);
    }
    
    questions.appendChild(choices);

    // if hint was used, give button visual effect when displaying new amount of hints remaining
    if (!mediaQuery.matches && hintUsed) {
        hintButton.style.opacity = "0.3";
        setTimeout(() => {
            hintButton.classList.add("hintBrightness");
            hintButton.style.opacity = "1";
        }, 200);
        setTimeout(() => {
            hintButton.textContent = `${hintsRemaining} left`;
            hintButton.classList.remove("hintBrightness");
        }, 1500);
        setTimeout(() => {
            hintButton.textContent = "Hint";
        }, 3250);
        hintUsed = false;
    }

    // if no hints have been used by certain points in the game, give display button a visual effect to draw attention
    if ((hintsRemaining == 3 && currentRound == 3) || (currentRound == 4 && correctCount < 2) || (currentRound == 5 && correctCount < 2) || (currentRound == 7 && hintsRemaining > 0)) {
        hintButton.classList.add("hintAttention");
        setTimeout(() => {
            hintButton.style.filter = "brightness(0.25)";
        }, 2000);
        setTimeout(() => {
            hintButton.style.filter = null;
        }, 3000);
        setTimeout(() => {
            hintButton.classList.remove("hintAttention");
        }, 4000);
    }
}

function setupGameDisplay()
{
    // Setup game container
    const gameContainer = document.querySelector(".game-container-start");
    gameContainer.id="gameContainer";

    if (gamesPlayed != 1) {
        // choose correct version and display for next game
        switch(true) {
            case currentRegion == usa:
                versionDisplayContainer.childNodes[1].textContent = "USA";
                versionDisplayContainer.childNodes[3].childNodes[0].src = "./images/usa-flag.webp";
                break;
            case currentRegion == europe:
                versionDisplayContainer.childNodes[1].textContent = "Europe";
                versionDisplayContainer.childNodes[3].childNodes[0].src = "./images/europe-flag.gif";
                break;
        }
        gameContainer.appendChild(versionDisplayContainer);
    }
    

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
        let numHints = document.createElement("p");

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
            hints.appendChild(numHints);
            hints.style.visibility = "hidden";
            hints.appendChild(hintButton);
            hintButton.textContent = `${hintsRemaining} remaining`;
            numHints.textContent = "Hint?";

            if (gamesPlayed == 1) {
                // add temporary message "Can you guess the city/country?"
                cityPic.style.opacity = "0.3";
                cityPic.classList.add("changeOpacity");
                leftSide.appendChild(document.createElement("h3")); // absolute positioning
                switch(true) {
                    case currentRegion == europe:
                        leftSide.childNodes[1].textContent = "Can you guess the country?";
                        leftSide.childNodes[1].style.left = "23vw";
                        break;
                    case currentRegion == usa:
                        leftSide.childNodes[1].textContent = "Can you guess the city?";
                        break;
                }
                leftSide.childNodes[1].classList.add("changeOpacity");
                // change opacities
                setTimeout(() => {
                    cityPic.style.opacity = null; // to full opacity
                    leftSide.childNodes[1].style.opacity = "0"; // to invisible
                }, 1000);
                // remove the text after even though it is invisible.
                setTimeout(() => {
                    leftSide.removeChild(leftSide.childNodes[1]);
                    cityPic.classList.remove("changeOpacity");
                }, 3000);
            }
        }
        else { // if window size <= 600px
            // appending top
            gameContainer.appendChild(leftSide);
            leftSide.appendChild(score);
            score.appendChild(questionNumber);
            // hints.appendChild(numHints);
            hints.appendChild(hintButton);
            hintButton.style.background = "none";
            hintButton.backgroundColor = "black";
            score.appendChild(hints);
            leftSide.appendChild(cityPic);

            hintButton.textContent = "Hint";
            // numHints.textContent = "Hints: ";

            if (gamesPlayed == 1) {
                // add temporary message "Can you guess the city/country?"
                cityPic.style.opacity = "0.3";
                cityPic.classList.add("changeOpacity");
                leftSide.appendChild(document.createElement("h3")); // absolute positioning
                switch(true) {
                    case currentRegion == europe:
                        leftSide.childNodes[2].textContent = "Can you guess the country?";
                        break;
                    case currentRegion == usa:
                        leftSide.childNodes[2].textContent = "Can you guess the city?";
                        leftSide.childNodes[2].style.left = "17vw";
                        break;
                }
                leftSide.childNodes[2].classList.add("changeOpacity");
                // change opacities
                setTimeout(() => {
                    cityPic.style.opacity = null; // to full opacity
                    leftSide.childNodes[2].style.opacity = "0"; // to invisible
                }, 1000);
                // remove the text after even though it is invisible.
                setTimeout(() => {
                    leftSide.removeChild(leftSide.childNodes[2]);
                    cityPic.classList.remove("changeOpacity");
                }, 3000);
            }

            // appending bottom
            gameContainer.appendChild(gamePanel);
            // gamePanel.appendChild(hints);
            // hints.appendChild(hintButton); // removing hints on this screen size for now
            // hints.appendChild(numHints);
        }

        let hintsDisplayTimer; // delay on hint display only on first game
        if (gamesPlayed == 1) {
            hintsDisplayTimer = 3000;
        }
        else
        {
            hintsDisplayTimer = 0;
        }

        setTimeout(() => {
            hintButton.style.background = "none";
            hintButton.backgroundColor = "black";
            hintButton.classList.add("chargeHintButton");
            hints.style.visibility = "visible";

            setTimeout(() => {
                hintButton.style.backgroundColor = "rgb(35, 181, 58)";
                setTimeout(() => {
                    hintButton.classList.remove("chargeHintButton");
                    hintButton.style.backgroundColor = null;
                    hintButton.style.background = null;
                }, 1500);
            }, 500);
        }, hintsDisplayTimer);


        if (!mediaQuery.matches) { // small screen
            if (gamesPlayed == 1) {
                hintsDisplayTimer = 5500;
            }
            else
            {
                hintsDisplayTimer = 500;
            }
            setTimeout(() => {
                hintButton.textContent = "3 left";
                setTimeout(() => {
                    hintButton.textContent = "Hint";
                }, 1500);
            }, hintsDisplayTimer);
        }

        let hintClickTimer = 0;
        if (gamesPlayed == 1) {
            hintClickTimer = 7000;
        }
        else {
            hintClickTimer = 3000;
        }
        setTimeout(() => {
            hintButton.addEventListener("click", () => {
                hintsRemaining--;
                if (hintsRemaining >= 0)
                {
                    hints.style.visibility = "hidden";
                    giveHint();
                }
            });
        }, hintClickTimer);

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

    // add event listeners for answer choice buttons on click
    const buttons = choices.childNodes;
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let correctOrIncorrect = button.textContent == cityQueue.peek().name; // bool determining if answer was correct or incorrect
            evaluateAnswer(correctOrIncorrect);
        });
    });
}


// Play new game
function playGame() {
    gamesPlayed++;

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