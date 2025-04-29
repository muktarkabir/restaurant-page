import "./homepage.css";
import heroImagePath from "../../assets/images/Sunny-Frantz.jpg";

export default function () {
  const homePageContainer = document.createElement("div");
  homePageContainer.classList.add("home-page-content");

  const heroTextContainer = document.createElement("div");
  heroTextContainer.classList.add("hero-text");
  const headLine = document.createElement("h1");
  const headLineSpan = document.createElement("span");
  headLineSpan.textContent = "Eat.com ";
  headLine.appendChild(headLineSpan);
  headLine.innerHTML += "Your ultimate destination for delicious food";
  const loremText = document.createElement("p");
  loremText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. A natusquos ea, rerum eum dolorum qui incidunt veritatis inventore minuseligendi. Laborum, sunt voluptatem asperiores quis magnam rationeculpa laudantium?`;
  const expLoreButton = document.createElement("button");
  expLoreButton.type = "button";
  expLoreButton.textContent = "Explore -->";

  heroTextContainer.append(headLine, loremText, expLoreButton);

  const heroImageContainer = document.createElement("div");
  heroImageContainer.classList.add("picture");
  const heroImage = document.createElement("img");
  heroImage.src = heroImagePath;
  heroImage.alt = "Picture of Food";

  heroImageContainer.appendChild(heroImage);

  homePageContainer.append(heroTextContainer, heroImageContainer);

  return homePageContainer;
}
