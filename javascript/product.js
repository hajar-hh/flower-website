const product = [
  { img: "../image/products/2.jpeg", para: "Daffodil flower", price: "143$" },
  { img: "../image/products/3.jpeg", para: "Chrysanthemum", price: "135$" },
  { img: "../image/products/4.jpeg", para: "sunflower", price: "75$" },
  { img: "../image/products/5.jpeg", para: "rose flower", price: "186$" },
  { img: "../image/products/6.jpeg", para: "hydrangeas", price: "80$" },
  { img: "../image/products/7.jpeg", para: "purple flower", price: "157$" },
  { img: "../image/products/8.jpeg", para: "orchid flower", price: "54$" },
  { img: "../image/products/9.jpeg", para: "Sea Lavender", price: "130$" },
  { img: "../image/products/10.jpeg", para: "Enamel flower", price: "120$" },
];

const cardsToShow = 3;

let firstCardIndex = 0;

function updateDisplay() {
  const displayArea = document.querySelector(".sec-card");
  displayArea.innerHTML = "";

  for (let i = 0; i < cardsToShow; i++) {
    const cardIndex = (firstCardIndex + i) % product.length;
    const card = product[cardIndex];
    const cardElement = document.createElement("div");
    cardElement.classList.add("box-card");
    cardElement.innerHTML = `<div class="img-color-back">
        <div class="img-card">
          <img src="${card.img}" alt="">
        </div>
      </div>
      <div class="info-card">
        <h4>${card.para}</h4>
      </div>
      <div class="price">
        <h5>${card.price}</h5>
        <button>submit</button>
      </div>`;
    displayArea.appendChild(cardElement);
  }
}

const leftArrow = document.querySelector(".bi-arrow-left-square");
const rightArrow = document.querySelector(".bi-arrow-right-square");

leftArrow.addEventListener("click", () => {
  firstCardIndex = (firstCardIndex - 1 + product.length) % product.length;
  updateDisplay();
});

rightArrow.addEventListener("click", () => {
  firstCardIndex = (firstCardIndex + 1) % product.length;
  updateDisplay();
});

updateDisplay();

// -----------------------------------------
const takhfif = [
  {
    img: "../image/takhfif/1.jpeg",
    para: "lorem8",
    price: "20$",
    price2: "45$",
  },
  {
    img: "../image/takhfif/2.jpeg",
    para: "lorem7",
    price: "20$",
    price2: "45$",
  },
  {
    img: "../image/takhfif/3.jpeg",
    para: "lorem6",
    price: "20$",
    price2: "45$",
  },
  {
    img: "../image/takhfif/4.jpeg",
    para: "lorem 5",
    price: "20$",
    price2: "45$",
  },
  {
    img: "../image/takhfif/5.jpeg",
    para: "lorem 2",
    price: "20$",
    price2: "45$",
  },
  {
    img: "../image/takhfif/6.jpeg",
    para: "lorem 3",
    price: "20$",
    price2: "45$",
  },
];

const cardsToShoww = 2;

let firstCardIndexx = 0;

function updateDisplayy() {
  const displayArea = document.querySelector(".container");
  displayArea.innerHTML = "";

  for (let i = 0; i < cardsToShoww; i++) {
    const cardIndex = (firstCardIndexx + i) % takhfif.length;
    const card = takhfif[cardIndex];
    const cardElement = document.createElement("article");
    cardElement.classList.add("left-card");
    cardElement.innerHTML = `<div class="img-color-back">
              <div class="img-box-center">
                  <img src="${card.img}" alt="">
              </div>
          </div>
          <div class="info-card">
              <h4>${card.para}</h4>
          </div>
          <div class="price">
              <h5 class="line-th">${card.price}</h5>
              <h4>${card.price2}</h4>
              <button>submit</button>
          </div>`;
    displayArea.appendChild(cardElement);
    setInterval(updateTimer, 1000);
  }
}

// ...
updateDisplayy();

const leftArroww = document.querySelector(".bi-box-arrow-left");
console.log(leftArroww);
const rightArroww = document.querySelector(".bi-box-arrow-right");

leftArroww.addEventListener("click", () => {
  firstCardIndexx = (firstCardIndexx - 1 + takhfif.length) % takhfif.length;
  updateDisplayy();
});

rightArroww.addEventListener("click", () => {
  firstCardIndexx = (firstCardIndexx + 1) % takhfif.length;
  updateDisplayy();
});

function updateTimer() {
  const now = new Date();
  const targetDate = new Date("2024-06-18T00:00:00");

  const timeDifference = targetDate - now;
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("hours").textContent = `${hours}`;
  document.getElementById("minutes").textContent = `${minutes}`;
  document.getElementById("seconds").textContent = `${seconds}`;
  updateDisplayy();
}

// ==============================================

setInterval(() => {
  const time = document.querySelector(".timee");

  const date = new Date();

  time.innerText =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}, 1000);

