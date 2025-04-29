import "./aboutpage.css";

export default function () {
  const container = document.createElement("div");

  const firstHeading = document.createElement("h1");
  const introductionLine = document.createElement("h4");
  const firstParagraph = document.createElement("p");
  const secondParagraph = document.createElement("p");

  const secondHeading = document.createElement("h1");
  const philosophies = document.createElement("ul");
  const firstPhilosophy = document.createElement("li");
  const secondPhilosophy = document.createElement("li");
  const thirdPhilosophy = document.createElement("li");

  const thridHeading = document.createElement("h1");
  const thePromise = document.createElement("p");
  const closingRemarks = document.createElement("p");

  firstHeading.textContent = "About Us";
  secondHeading.textContent = "Our Philosophy";
  thridHeading.textContent = "Our Promise";

  introductionLine.textContent ="Welcome to Eat.com — where every meal feels like coming home.";
  firstParagraph.textContent = `At [Restaurant Name], we believe food brings people together.\nOur story began in [Year] with a simple vision:\nto serve authentic, delicious meals made from the freshest local ingredients, in a warm and welcoming atmosphere.`;
  secondParagraph.textContent = `Every dish we prepare is crafted with passion, tradition, and a love for real flavors.\nFrom hand-tossed pizzas to chef-inspired entrees, we aim to create a dining experience you'll want to return to again and again.`;  
  
  firstPhilosophy.innerHTML = `Fresh Ingredients — We partner with local farmers and markets to bring the best seasonal produce straight to your plate`;
  secondPhilosophy.innerHTML = `Crafted with Care — Every meal is made from scratch with attention to detail and quality.`;
  thirdPhilosophy.innerHTML = `A Place for Everyone — Whether it's a casual lunch, a family gathering, or a special celebration, you'll find a warm welcome here.`;
  
  thePromise.textContent = "We're more than just a place to eat — we're a place to celebrate, connect, and create lasting memories.";
  closingRemarks.textContent = "Thank you for being part of our story.\nWe can't wait to serve you soon."
  return container;

}
