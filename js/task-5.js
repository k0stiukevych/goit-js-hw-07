function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const button = document.querySelector(".change-color");
  const spanColor = document.querySelector(".color");

  button.addEventListener("click", function () {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    spanColor.textContent = randomColor;
  });
});
