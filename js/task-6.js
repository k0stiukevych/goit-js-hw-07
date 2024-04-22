function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = () => {
  const input = document.querySelector('input[type="number"]');
  const amount = parseInt(input.value);
  const boxesDiv = document.getElementById("boxes");

  if (amount >= 1 && amount <= 100) {
    boxesDiv.innerHTML = "";
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxesDiv.appendChild(box);
    }
    input.value = "";
  }
};

const destroyBoxes = () => {
  document.getElementById("boxes").innerHTML = "";
};

document.querySelector("[data-create]").addEventListener("click", createBoxes);
document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
