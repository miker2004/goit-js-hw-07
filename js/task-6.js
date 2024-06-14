function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBoxes = (amount) => {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; 

  const boxesHtml = Array.from({ length: amount }, (_, i) => {
    const size = 30 + i * 10;
    return `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
  }).join('');

  boxesContainer.innerHTML = boxesHtml;
}

const destroyBoxes = () => {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; 
}

document.querySelector('button[data-create]').addEventListener('click', function() {
  const input = document.querySelector('input[type="number"]');
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

document.querySelector('button[data-destroy]').addEventListener('click', function() {
  destroyBoxes();
});