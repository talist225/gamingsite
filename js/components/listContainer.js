const initializeList = () => {
  let listContainer = document.getElementById("listContainer");
  listContainer.innerHTML = "";
  for (let gameListItem of gameListArr) {
    listContainer.innerHTML += `<div class="card" data-item="${gameListItem.dataItem}">
    <img src="${gameListItem.imgUrl}" alt="" />
    <div class="content">
      <h4>${gameListItem.title}
      <button id="myBtn">
      <i class="bx bx-info-circle"></i>
    </button></h4>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>
        ${gameListItem.info}
        </p>
       <div class="cardBtn">
        <a href="#">Buy Now</a>
        <a href="./newsupdates.html">More News & Updates</a>
      </div>
    </div>
  </div>
      <div class="progress-line"><span></span></div>
      <div class="info">
      <i class='bx bxs-heart'></i>
        <p>Price<br /><span>$${gameListItem.price}</span></p>
        <a href="#">Play Now</a>
      </div>
    </div>
    </div>`;
  }
};
initializeList();
