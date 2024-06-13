function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const background = document.querySelector("body");
const colorNmbr = document.querySelector("body > div > p > span");

const changeColor = (event) => {
  const randomColor = getRandomHexColor();
  background.style.backgroundColor = randomColor; 
  colorNmbr.textContent = randomColor; 
};

background.addEventListener("click", changeColor);