const displayCart = (id) => {
  let cartToDisplay = 0;
  for (let i = 0; i < gameListArr.length; i++) {
    if (gameListArr[i].id == id) {
      cartToDisplay = i;
      break;
    }
  }
  document.getElementById("cartDivToDisplay").innerHTML = `
  <div id="open-cart" class="cart">
  <span id="closeBtn" class="close">&times;</span>
<div class="cart-content">
  <div>
      <ul class="table">
      <li class="table-header">
        <div class="col col-1">Console</div>
        <div class="col col-2">Name</div>
        <div class="col col-3">Price</div>
        <div class="col col-4">Status</div>
      </li>
      <li class="table-row">
      <div class="col col-1">${gameListArr[cartToDisplay].dataItem}</div>
      <div class="col col-2">${gameListArr[cartToDisplay].title}</div>
      <div class="col col-3">${gameListArr[cartToDisplay].price}</div>
        <div class="col col-4"> <a href="#">Remove</a></div>
        
       
      </li>
      <li class="table-row">
      <div class="col col-1">${gameListArr[10].dataItem}</div>
      <div class="col col-2">${gameListArr[10].title}</div>
      <div class="col col-3">${gameListArr[10].price}</div>
        <div class="col col-4"><a href="#">Remove</a></div>
      </li>
    </ul>
  </div>
  <span>
  <p>
  Total Price: ${gameListArr[cartToDisplay].price}</p>
  <div class="cardBtn">
  <a href="#">Buy Now</a>
  </span>
</div>
</div>
  `;
  document.getElementById("closeBtn").addEventListener("click", () => {
    document.getElementById("cartDivToDisplay").innerHTML = "";
  });
};
