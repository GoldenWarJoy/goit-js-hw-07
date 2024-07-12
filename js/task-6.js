function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const dataDestroyButton = document.querySelector("[data-destroy]");

const dataCreateButton = document.querySelector("[data-create]");

const amountInput = document.querySelector('input[type = "number"]');

const boxesContainer = document.getElementById("boxes");

dataCreateButton.addEventListener("click", function () {
  const amount = parseInt(amountInput.value, 10);
  if (amount >= 0 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Only 1-100 numbers are supported.");
  }
});

dataDestroyButton.addEventListener("click", function () {
  destroyBoxes();
});

function createBoxes(amount) {
  destroyBoxes();
  const usedColors = new Set(); // colors dont repeat

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("newBox");
    let newColor;

    do {
      newColor = getRandomHexColor(); //colors dont repeat
    } while (usedColors.has(newColor));

    usedColors.add(newColor);

    newBox.style.backgroundColor = newColor;

    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    boxesContainer.appendChild(newBox);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
