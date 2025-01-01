const mediaQuery = window.matchMedia('(min-width: 601px)');
const gameButtons = document.querySelector(".game-buttons");
const header = document.querySelector(".header");
if (mediaQuery.matches) {
    setTimeout(() => {
        header.childNodes[1].textContent = "Welcome";
    }, 1700);
    
    setTimeout(() => {
        header.childNodes[1].textContent = "欢迎";
    }, 3400);
}
else {
    for (let i = 3; i < 6; i += 2) {
        gameButtons.childNodes[i].style.opacity = "0.7";
    }
    
    setTimeout(() => {
        gameButtons.childNodes[3].style.opacity = "1";
        header.childNodes[1].textContent = "Welcome";
    }, 1700);
    
    setTimeout(() => {
        gameButtons.childNodes[5].style.opacity = "1";
        header.childNodes[1].textContent = "欢迎";
    }, 3400);
}

