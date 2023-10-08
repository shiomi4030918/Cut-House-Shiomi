let nav = document.querySelector("#navarea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");
let inner = document.querySelector(".inner");

btn.onclick = () => {
    nav.classList.toggle("open");
};
mask.onclick = () => {
    nav.classList.toggle("open");
};
inner.onclick = () => {
    nav.classList.toggle("open");
};