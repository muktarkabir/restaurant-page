import "./style.css";
import homepage from "./modules/homepage/homepage.js";
import menupage from "./modules/menupage/menupage.js";
import aboutpage from "./modules/aboutpage/aboutpage.js";

const content = document.querySelector("#content");
const buttons = document.querySelector("header nav");

document.addEventListener("DOMContentLoaded", () => {
  content.append(homepage());
});

buttons.addEventListener("click", (e) => {
  switch (e.target.classList.value) {
    case "home":
      content.replaceChildren(homepage());
      break;
    case "menu":
      content.replaceChildren(menupage());
      break;
    case "about":
      content.replaceChildren(aboutpage());
      break;
  }
});
