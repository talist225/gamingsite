var cart = document.getElementById("open-cart");

const displayCart = () => {
  let totalPrice = 0;
  let cartToDisplay = document.getElementById("cartDivToDisplay");
  cartToDisplay.innerHTML = "";
  cartToDisplay.innerHTML = `
  <div id="open-cart" class="cart">
  <span></span>
  <span id="closeBtn" class="close">&times;</span>
<div class="cart-content">
<h2>Shopping Cart</h2>
  <div>
      <ul class="table" id="displayCartContent">
      <li class="table-header">
        <div class="col col-1">Console</div>
        <div class="col col-2">Name</div>
        <div class="col col-3">Price</div>
        <div class="col col-4">Status</div>
      </li>
    </ul>
  </div>
  <span id="totalPrice">
  <p class="totalPrice">
  Total Price: ${totalPrice}</p>
  <div class="cardBtn">
  <a href="#">Buy Now</a>
  </span>
</div>
</div>
  `;
  let displayCartContent = document.getElementById("displayCartContent");
  let totalPriceSpan = document.getElementById("totalPrice");
  for (let id of cartArr) {
    let game;
    for (let gameListItem of gameListArr) {
      if (gameListItem.id == id) {
        game = gameListItem;
        break;
      }
    }
    let li = document.createElement("li");
    li.setAttribute("class", "table-row");
    li.setAttribute("id", "remove");
    li.innerHTML = `
    <div class="col col-1">${game.dataItem}</div>
    <div class="col col-2">${game.title}</div>
    <div class="col col-3">${game.price}</div>
      <div class="col col-4"><a href="#" onclick="deleteItem(${
        game.id + ""
      })">Remove</a></div>
    `;
    totalPrice += game.price;
    displayCartContent.appendChild(li);
  }
  totalPriceSpan.innerHTML = `
  <p class="totalPrice">
  Total Price: $${totalPrice}</p>
  <div class="cardBtn">
  <a href="#">Buy Now</a>
  `;

  document.getElementById("closeBtn").addEventListener("click", () => {
    document.getElementById("cartDivToDisplay").innerHTML = "";
  });
};

document.querySelector("#cart").addEventListener("click", () => {
  if (document.querySelector("#cartDivToDisplay").innerHTML) {
    document.querySelector("#cartDivToDisplay").innerHTML = "";
  } else {
    displayCart();
  }
});

const deleteItem = (id) => {
  const deleteItem = document.getElementById("remove");
  deleteItem.remove(".table-row");
  let index;
  for (let i = 0; i < cartArr.length; i++) {
    if (cartArr[i] == id) {
      index = i;
      break;
    }
  }
  cartArr.splice(index, 1);
  localStorage.setItem("cartArr", cartArr);
  displayCart();
};
