const initializeCardsGrid = () => {
  let cardsGrid = document.getElementById("cardsGrid");
  cardsGrid.innerHTML = "";
  for (let gameListItem of gameListArr) {
    cardsGrid.innerHTML += `<div class="card" data-item="${gameListItem.dataItem}">
    <img src="${gameListItem.imgUrl}" alt="" />
    <div class="content">
      <h4>${gameListItem.title}
      <button id="myBtn${gameListItem.id}">
      <i class="bx bx-info-circle"></i>
    </button></h4>
    <div class="progress-line"><span></span></div>
      <div class="info">
      <i class='bx bxs-heart' id="addToCart${gameListItem.id}"></i>
        <p>Price<br /><span>$${gameListItem.price}</span></p>
        <a href="#">Play Now</a>
      </div>
      </div>
    </div>
    </div>`;
  }
  for (let gameListItem of gameListArr) {
    document
      .getElementById(`myBtn${gameListItem.id}`)
      .addEventListener("click", () => {
        displayModal(gameListItem.id);
      });
    document
      .getElementById(`addToCart${gameListItem.id}`)
      .addEventListener("click", () => {
        cartArr.push(`${gameListItem.id}`);
        localStorage.setItem("cartArr", JSON.stringify(cartArr));
        displayCart();
      });
  }
};
initializeCardsGrid();
