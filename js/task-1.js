const categories = document.querySelectorAll("li.item");

console.log("Number of categories:", categories.length);

categories.forEach((category) => {
  const catName = category.querySelector("h2").textContent;
  const elementsOfCat = category.querySelectorAll("ul li");
  console.log("Category: ", catName);
  console.log("Elements: ", elementsOfCat.length);
});
