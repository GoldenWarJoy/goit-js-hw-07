const list = document.querySelectorAll("#categories li.item");
console.log(`Number of categories: ${list.length}`);

list.forEach((element) => {
  const header = element.querySelector("h2");

  if (header) {
    console.log(`Cathegory: ${header.textContent}`);
    const elementsLi = element.querySelectorAll("ul li");
    console.log(`Elements: ${elementsLi.length}`);
  }
});
