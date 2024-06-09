const cartCounter = document.getElementById("cartCounter");

function setup() {
  const cards = document.getElementsByClassName("card");
  const liElements = document.getElementsByTagName("li");

  for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = cardClicked;
    for (let j = 0; j < sessionStorage.length; j++) {
      const key = sessionStorage.key(j);
      if (key === cards[i].getElementsByTagName("p")[0].innerText) {
        cards[i].lastElementChild.style = "display: flex";
        cards[i].lastElementChild.innerText = sessionStorage.getItem(key);
      }
    }
  }

  for (let i = 0; i < liElements.length; i++) {
    liElements[i].onclick = changeCategory;
  }

  if (sessionStorage.getItem("cartCounter") !== null && sessionStorage.getItem("cartCounter") !== 0) {
    cartCounter.innerText = sessionStorage.getItem("cartCounter");
    cartCounter.style = "display: flex";
  } else {
    cartCounter.style = "display: none";
  }
}

function changeCategory() {
  let chosenCategory;
  data.categories.forEach((category) => {
    if (category.name === this.innerText) {
      chosenCategory = category;
    }
  });

  const articles = document.querySelector(".artikli");
  articles.innerHTML = "";

  chosenCategory.products.forEach((product) => {
    const article = document.createElement("article");
    article.innerHTML = `
        <div class="card" onclick="cardClicked()">
        <img
          src="${product.image}"
          alt="${product.name}"
          style="width: 100%"
        />
        <div class="card-container">
          <p><b>${product.name}</b></p>
        </div>
        <h5 style="display: none;">0</h5>
      </div>
        `;
    articles.appendChild(article);
  });

  const naslov = document.querySelector(".naslov");
  naslov.innerText = chosenCategory.name;

  setup();
}

function cardClicked() {
  incrementCardCounter(this);
  incrementCartCounter();
  saveState(this);
}

function incrementCartCounter() {
  cartCounter.innerText = parseInt(cartCounter.innerText) + 1;
  cartCounter.style = "display: flex";
  sessionStorage.setItem("cartCounter", parseInt(cartCounter.innerText));
}

function incrementCardCounter(counter) {
  counter.lastElementChild.style = "display: flex";

  counter.lastElementChild.innerText =
    parseInt(counter.lastElementChild.innerText) + 1;
}

function saveState(card) {
  const productName = card.getElementsByTagName("p")[0].innerText;
  const productCounter = parseInt(card.lastElementChild.innerText);
  sessionStorage.setItem(productName, productCounter);
}

setup();
document.getElementsByTagName("li")[0].onclick();
