const colors = ["green", "red", "blue", "yellow", "orange", "violet", "black", "white", "cyan", "magenta"];

const btn = document.querySelector('#btn');
const color = document.querySelector('#color');
const main = document.querySelector('#main');


const randomArr = () => {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', () => {
    let random = randomArr();
    main.style.backgroundColor = colors[random];
    color.textContent = colors[random];
})