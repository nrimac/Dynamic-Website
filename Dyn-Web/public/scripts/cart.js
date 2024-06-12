function updateCart(button) {
  const cartCounter = document.getElementById("cartCounter");
  const productId = button.parentElement.parentElement.dataset.id;

  if (button.innerText === "+") {
    button.parentElement.getElementsByTagName("span")[0].innerText =
      parseInt(button.parentElement.getElementsByTagName("span")[0].innerText) +
      1;

    cartCounter.innerText = parseInt(cartCounter.innerText) + 1;

    fetch(`/cart/add/${productId}`, {
      method: "POST",
      body: JSON.stringify({ productId: productId }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to add product to cart");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    return;
  } else if (
    button.parentElement.getElementsByTagName("span")[0].innerText == "0"
  )
    return;

  button.parentElement.getElementsByTagName("span")[0].innerText =
    parseInt(button.parentElement.getElementsByTagName("span")[0].innerText) -
    1;

  cartCounter.innerText = parseInt(cartCounter.innerText) - 1;

  fetch(`/cart/remove/${productId}`, {
    method: "POST",
    body: JSON.stringify({ productId: productId }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to remove product to cart");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function initCartButtons() {
  const buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      updateCart(buttons[i]);
    });
  }
}

window.onload = initCartButtons();
