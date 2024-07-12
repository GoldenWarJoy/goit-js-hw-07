const textInput = document.querySelector("#name-input");
const textOutPut = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const cleanedValue = event.currentTarget.value.trim();
  textOutPut.textContent = cleanedValue;
  if (cleanedValue === "") {
    textOutPut.textContent = "Anonymous";
  }
});
