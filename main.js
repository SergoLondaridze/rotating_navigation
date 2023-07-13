const circle = document.querySelector(".circle");
const burgerImg = document.querySelector(".burger >img");
const closeImg = document.querySelector(".close > img");
const main = document.querySelector(".main");

const lis = document.querySelectorAll(".li");
const nav = document.querySelector(".nav");

burgerImg.addEventListener("click", () => {
  circle.classList.add("rotate");
  main.classList.add("rotateTxt");
  nav.classList.add("navTranslate");
  lis.forEach((li, index) => {
    li.style.translate = ` ${index * 5}px `;
  });
});
closeImg.addEventListener("click", () => {
  circle.classList.remove("rotate");
  main.classList.remove("rotateTxt");
  nav.classList.remove("navTranslate");
  lis.forEach((li, index) => {
    li.style.translate = ` ${-index * 5}px `;
  });
});
