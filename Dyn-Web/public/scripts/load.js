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
}

function cardClicked() {
  incrementCardCounter(this);
  saveState(this);

  const productId = this.dataset.id;
  window.location.href = `${window.location.href}/${productId}`;
}

function incrementCardCounter(counter) {
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
