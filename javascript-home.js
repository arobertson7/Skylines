const body = document.querySelector("body");
body.style.height = "100%";

const mediaQuery = window.matchMedia('(min-width: 601px)');
const header = document.querySelector(".header");
// divs for buttons including their labels
const topButton = document.getElementById("europe");
const middleButton = document.getElementById("usa");
const bottomButton = document.getElementById("worldwide");
const buttonsContainer = document.querySelector(".game-buttons");


if (!mediaQuery.matches) { // small screen
    buttonsContainer.removeChild(middleButton);
    buttonsContainer.removeChild(bottomButton);
    header.childNodes[1].textContent = "Willkommen";

    // change to usa
    let timer = 1700;
    setTimeout(() => {
        header.childNodes[1].textContent = "Welcome";
        topButton.childNodes[1].textContent = "USA";
        topButton.childNodes[3].childNodes[0].childNodes[0].src = "./images/usa2.avif";
        topButton.childNodes[3].setAttribute("href", "./usa.html");
    }, timer);
    
    // change to worldwide
    timer += 1700;
    setTimeout(() => {
        header.childNodes[1].textContent = "欢迎";
        topButton.childNodes[1].textContent = "Worldwide";
        topButton.childNodes[3].childNodes[0].childNodes[0].src = "./images/worldwide.avif";
        topButton.childNodes[3].removeAttribute("href");
    }, timer);

    // display them all
    timer += 2000;
    setTimeout(() => {
        buttonsContainer.appendChild(middleButton);
        buttonsContainer.appendChild(bottomButton);
        body.style.height = null;
        header.childNodes[1].textContent = "Skylines";
        topButton.childNodes[1].textContent = "Europe";
        topButton.childNodes[3].childNodes[0].childNodes[0].src = "./images/europe3.webp";
        topButton.childNodes[3].setAttribute("href", "./europe.html");
        middleButton.style.visibility = "visible";
        bottomButton.style.visibility = "visible";
        // enable link
        topButton.childNodes[3].setAttribute("href", "./europe.html");

        // currently disabling worldwide
        bottomButton.childNodes[3].style.opacity = "0.3";
        bottomButton.childNodes[3].removeAttribute("href");
        const comingSoon = document.createElement("p");
        comingSoon.id = "comingSoon";
        comingSoon.textContent = "Coming soon...";
        bottomButton.appendChild(comingSoon);
    }, timer);
}

if (mediaQuery.matches) { // large screen
    // currently disabling worldwide
    bottomButton.childNodes[3].style.opacity = "0.2";
    bottomButton.childNodes[3].removeAttribute("href");
    const comingSoon = document.createElement("p");
    comingSoon.id = "comingSoon";
    comingSoon.textContent = "Coming soon...";
    bottomButton.appendChild(comingSoon);
}