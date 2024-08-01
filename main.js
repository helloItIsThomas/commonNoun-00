class Person {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

const colors = [
  "#FF6C2F",
  "#FFE800",
  // "#235BA8",
  "#62C2B1",
  "#FF665E",
  "#F984CA",
  "#68724D",
  // "#BD6439",
];

const people = [
  new Person("thomas", "https://helloitsthomas.xyz/"),
  new Person("mars", "https://marianamatos.xyz/"),
  new Person("tall man", "https://zachdt.co/"),
  new Person("leoWeo", "https://leos-izm.com/"),
  new Person("goose", "https://lucyvaneerde.com/"),
  new Person("micah", "https://micahrowgo.com/"),
  new Person("nibby", "https://nickfrench.design/"),
  new Person("emmuh", "http://emmagreschak.com/"),
];

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
  // const stackDiv = document.querySelector(".stack");
  const stackDiv = document.querySelector("#right");
  stackDiv.innerHTML = ""; // Clear any existing content

  // Shuffle the people array
  people.sort(() => Math.random() - 0.5);

  people.forEach((person, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.zIndex = people.length - index;
    cardDiv.textContent = person.name;
    cardDiv.addEventListener("click", () => {
      window.open(person.url, "_blank");
    });
    stackDiv.appendChild(cardDiv);
  });

  const cards = document.querySelectorAll(".card");

  cards.forEach((card, i) => {
    const cardW = card.clientWidth;
    const cardH = card.clientHeight;
    const containerW = stackDiv.clientWidth - cardW;
    const containerH = stackDiv.clientHeight - cardH;
    const totalCards = cards.length;

    // Position the cards diagonally considering their width and height
    const x = (containerW / totalCards) * i;
    const y = (containerH / totalCards) * i;

    card.style.left = `${x}px`;
    card.style.top = `${y}px`;

    card.addEventListener("mouseover", function () {
      cards.forEach((c) => c.classList.remove("hovered"));
      this.classList.add("hovered");
    });

    card.addEventListener("mouseout", function () {
      this.classList.remove("hovered");
    });
  });
});

window.addEventListener("resize", () => {
  const stackDiv = document.querySelector("#right");
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, i) => {
    const cardW = card.clientWidth;
    const cardH = card.clientHeight;
    const containerW = stackDiv.clientWidth - cardW;
    const containerH = stackDiv.clientHeight - cardH;
    const totalCards = cards.length;

    // Position the cards diagonally considering their width and height
    const x = (containerW / totalCards) * i * 1.0;
    const y = (containerH / totalCards) * i;

    card.style.left = `${x}px`;
    card.style.top = `${y}px`;
  });
});

window.onload = function () {
  var images = [
    "https://freight.cargo.site/t/original/i/S1899258850864867053401910084278/CN-0.png",
    "https://freight.cargo.site/t/original/i/K1899258850883313797475619635894/CN-1.png",
    "https://freight.cargo.site/t/original/i/T1899258850901760541549329187510/CN-2.png",
    "https://freight.cargo.site/t/original/i/D1899258850920207285623038739126/CN-3.png",
    "https://freight.cargo.site/t/original/i/O1899258850938654029696748290742/CN-4.png",
    "https://freight.cargo.site/t/original/i/S1899258850957100773770457842358/CN-5.png",
    "https://freight.cargo.site/t/original/i/S1899258850975547517844167393974/CN-6.png",
    "https://freight.cargo.site/t/original/i/P1899258850993994261917876945590/CN-7.png",
    "https://freight.cargo.site/t/original/i/N1899258851012441005991586497206/CN-8.png",
    "https://freight.cargo.site/t/original/i/U1899258851030887750065296048822/CN-9.png",
  ];
  var randomIndex = Math.floor(Math.random() * images.length);
  document.getElementById("bannerImage").src = images[randomIndex];
};
