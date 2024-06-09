function updateCart(button) {
  const cartCounter = document.getElementById("cartCounter");

  if (button.innerText === "+") {
    button.parentElement.getElementsByTagName("span")[0].innerText =
      parseInt(button.parentElement.getElementsByTagName("span")[0].innerText) +
      1;

    cartCounter.innerText = parseInt(cartCounter.innerText) + 1;
  } else if (
    button.parentElement.getElementsByTagName("span")[0].innerText != "0"
  ) {
    button.parentElement.getElementsByTagName("span")[0].innerText =
      parseInt(button.parentElement.getElementsByTagName("span")[0].innerText) -
      1;

    cartCounter.innerText = parseInt(cartCounter.innerText) - 1;
  }
}

function initCartButtons() {
  const buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      updateCart(buttons[i]);
    });
  }
}

function setupCart() {
  const cart = document.querySelector(".kosarica");

  for (let i = 0; i < sessionStorage.length; i++) {
    data.categories.forEach((category) => {
      category.products.forEach((product) => {
        if (product.name == sessionStorage.key(i)) {
          const newCartDiv = document.createElement("div");
          const productName = product.name;
          const productCounter = sessionStorage.getItem(productName);

          newCartDiv.innerHTML = `
          <div class="cartProduct">
            <h3>${productName}</h3>
            <div>
              <button>+</button>/<button>-</button>
              <p>Quantity: <span>${productCounter}</span></p>
            </div>
          </div>
          `;

          cart.appendChild(newCartDiv);
        }
      });
    });
  }

  initCartButtons();
}

function init() {
  const cart = document.querySelector(".kosarica");

  if (sessionStorage.getItem("cartCounter") === null) {
    cart.innerHTML = "<h1>Your cart is empty :(</h1>";
  } else {
    const cartCounter = document.getElementById("cartCounter");
    cartCounter.style = "display: auto";
    cartCounter.innerText = sessionStorage.getItem("cartCounter");
    setupCart();
  }
}

init();
