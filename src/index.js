import "./style.css";
import homepage from "./components/homepage/homepage.js";
import menupage from "./components/menupage/menupage.js";
import aboutpage from "./components/aboutpage/aboutpage.js";

const content = document.querySelector("#content");

const homeButton = document.querySelector("button.home");
const menuButton = document.querySelector("button.menu");
const aboutButton = document.querySelector("button.about");

document.addEventListener("DOMContentLoaded", () => {
  content.append(homepage());
});
homeButton.addEventListener("click", () => {
  content.replaceChildren(homepage());
});

menuButton.addEventListener("click", () => {
  content.replaceChildren(menupage());
});

aboutButton.addEventListener("click", () => {
  content.replaceChildren(aboutpage());
});
