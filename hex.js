const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const main = document.getElementById('hMain');
const btn = document.getElementById('hBtn');
const paragraph = document.getElementById('hColor');

const randomArr = () => {
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', () => {
    let value = "#";
    for(let i = 0; i < 6; i++){
        value += hex[randomArr()];
    }
    main.style.backgroundColor = value;
    paragraph.textContent = value;
})