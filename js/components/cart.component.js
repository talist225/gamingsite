var cart = document.getElementById("open-cart");

// const displayCart = (id) => {
//   let cartToDisplay = 0;
//   for (let i = 0; i < gameListArr.length; i++) {
//     if (gameListArr[i].id == id) {
//       cartToDisplay = i;
//       break;
//     }
//   }

const displayCart = () => {
  let cartToDisplay = document.getElementById("cartDivToDisplay");
  cartToDisplay.innerHTML = "";
  for (let gameListItem of gameListArr) {
    cartToDisplay.innerHTML = `
  <div id="open-cart" class="cart">
  <span id="closeBtn" class="close">&times;</span>
<div class="cart-content">
<h2>Shopping Cart</h2>
  <div>
      <ul class="table">
      <li class="table-header">
        <div class="col col-1">Console</div>
        <div class="col col-2">Name</div>
        <div class="col col-3">Price</div>
        <div class="col col-4">Status</div>
      </li>
      <li class="table-row" id="remove">
      <div class="col col-1">${gameListItem.dataItem}</div>
      <div class="col col-2">${gameListItem.title}</div>
      <div class="col col-3">$${gameListItem.price}</div>
        <div class="col col-4"> <a href="#" onclick="deleteItem()">Remove</a></div>
        
       
      </li>
      <li class="table-row" id="remove">
      <div class="col col-1">${gameListItem.dataItem}</div>
      <div class="col col-2">${gameListItem.title}</div>
      <div class="col col-3">${gameListItem.price}</div>
        <div class="col col-4"><a href="#" onclick="deleteItem()">Remove</a></div>
      </li>
    </ul>
  </div>
  <span>
  <p id="totalPrice">
  Total Price: $${gameListItem.price}</p>
  <div class="cardBtn">
  <a href="#">Buy Now</a>
  </span>
</div>
</div>
  `;
  }

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

function deleteItem() {
  const deleteItem = document.getElementById("remove");
  deleteItem.remove(".table-row");
}
