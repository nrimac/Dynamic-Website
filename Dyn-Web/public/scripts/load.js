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
    liElements[i].onclick = setup;
  }

  if (
    sessionStorage.getItem("cartCounter") !== null &&
    sessionStorage.getItem("cartCounter") !== 0
  ) {
    cartCounter.innerText = sessionStorage.getItem("cartCounter");
    cartCounter.style = "display: flex";
  } else {
    cartCounter.style = "display: none";
  }
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
//document.getElementsByTagName("li")[0].onclick();
