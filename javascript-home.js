const header = document.querySelector(".header");
setTimeout(() => {
    header.childNodes[1].textContent = "Bienvenue";
}, 1500);

setTimeout(() => {
    header.childNodes[1].textContent = "Welcome";
}, 3000);