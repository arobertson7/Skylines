const body = document.querySelector("body");
// body.style.height = "100%";

const mediaQuery = window.matchMedia('(min-width: 601px)');
const header = document.querySelector(".header");
// divs for buttons including their labels
const topButton = document.getElementById("europe");
const middleButton = document.getElementById("usa");
const bottomButton = document.getElementById("worldwide");
// disable first button link until display is over
topButton.childNodes[3].removeAttribute("href");

if (!mediaQuery.matches) { // small screen
    // initalize bottom buttons to be hidden
    middleButton.style.visibility = "hidden";
    bottomButton.style.visibility = "hidden";

    
    // change to usa
    let timer = 1700;
    setTimeout(() => {
        header.childNodes[1].textContent = "Welcome";
        topButton.childNodes[1].textContent = "USA";
        topButton.childNodes[3].childNodes[0].childNodes[0].src = "./images/usa2.avif";
    }, timer);
    
    // change to worldwide
    timer += 1700;
    setTimeout(() => {
        header.childNodes[1].textContent = "欢迎";
        topButton.childNodes[1].textContent = "Worldwide";
        topButton.childNodes[3].childNodes[0].childNodes[0].src = "./images/worldwide.avif";
    }, timer);

    // display them all
    timer += 2000;
    setTimeout(() => {
        // body.style.height = null;
        header.childNodes[1].textContent = "Skylines";
        topButton.childNodes[1].textContent = "Europe";
        topButton.childNodes[3].childNodes[0].childNodes[0].src = "./images/europe3.webp";
        middleButton.style.visibility = "visible";
        bottomButton.style.visibility = "visible";
        // enable link
        topButton.childNodes[3].setAttribute("href", "./europe.html");
    }, timer);
}

