const initializeList = () => {
  let listContainer = document.getElementById("listContainer");
  listContainer.innerHTML = "";
  for (let gameListItem of gameListArr) {
    listContainer.innerHTML += `
    
    <div class="card" data-item="${gameListItem.dataItem}">
    <img src="${gameListItem.imgUrl}" alt="">
    <div class="content">
      <h4>${gameListItem.title}
      <button id="myBtn2${gameListItem.id}">
      <i class="bx bx-info-circle"></i>
    </button></h4>
    <div class="progress-line"><span></span></div>
    <div class="info">
    <i class='bx bxs-heart'></i>
      <p>Price<br /><span>$${gameListItem.price}</span></p>
      <a href="#">Play Now</a>
    </div>
    </div>
  </div>
  </div>`;
  }
  for (let gameListItem of gameListArr) {
    document
      .getElementById(`myBtn2${gameListItem.id}`)
      .addEventListener("click", () => {
        displayModal(gameListItem.id);
      });
  }
};
initializeList();
