import "./menupage.css";
import pizzaImg from "../../assets/images/Pizza-Margherita.jpeg";
import ceaserSaladImg from "../../assets/images/Caesar-Pasta-Salad.jpeg";
import garlicBreadImg from "../../assets/images/Garlic-Bread.jpeg";
import grilledSalmonImg from "../../assets/images/Grilled-salmon.jpeg";
import spaghettiImg from "../../assets/images/Spaghetti-alla-Carbonara.jpeg";
import tiramisuImg from "../../assets/images/tiramisu.jpeg";
import ramenImg from "../../assets/images/ramen.jpeg";
import crackBurgerImg from "../../assets/images/crack-burger.jpeg";

export default function () {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  menuItems.forEach((item) => {
    const renderItem = buildMenuItemCard(item);
    menuContainer.append(renderItem);
  });
  return menuContainer;
}

class MenuItem {
  constructor(name, price, description, imageUrl) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

const menuItems = [
  new MenuItem(
    "Margherita Pizza",
    12.99,
    "Classic pizza with fresh mozzarella, tomatoes, and basil.",
    pizzaImg
  ),
  new MenuItem(
    "Spaghetti Carbonara",
    14.99,
    "Creamy pasta with pancetta, parmesan, and black pepper.",
    spaghettiImg
  ),
  new MenuItem(
    "Caesar Salad",
    9.99,
    "Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan.",
    ceaserSaladImg
  ),
  new MenuItem(
    "Grilled Salmon",
    18.99,
    "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
    grilledSalmonImg
  ),
  new MenuItem(
    "Tiramisu",
    7.99,
    "Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    tiramisuImg
  ),
  new MenuItem(
    "Garlic Bread",
    4.99,
    "Warm, buttery bread infused with garlic and herbs.",
    garlicBreadImg
  ),
  new MenuItem(
    "Ramen",
    8.99,
    "Delicious japanese style bowl of ramen with chiken and eggs",
    ramenImg
  ),
  new MenuItem(
    "Crack Burger",
    3.99,
    "Burger so tasty and addicting, its almost like...",
    crackBurgerImg
  ),
];

function buildMenuItemCard(menuItem) {
  const container = document.createElement("div");
  container.classList.add("card");
  const pictureDiv = document.createElement("div");
  pictureDiv.classList.add("pic");
  const picture = document.createElement("img");
  picture.src = menuItem.imageUrl;
  pictureDiv.appendChild(picture);
  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("details");
  const name = document.createElement("h2");
  name.textContent = menuItem.name;
  const price = document.createElement("h4");
  price.textContent = menuItem.price;
  const description = document.createElement("p");
  description.textContent = menuItem.description;
  detailsDiv.append(name, price, description);
  container.append(pictureDiv, detailsDiv);
  return container;
}
