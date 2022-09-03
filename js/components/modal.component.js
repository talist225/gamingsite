const displayModal = (id) => {
  let productToDisplay = 0;
  for (let i = 0; i < gameListArr.length; i++) {
    if (gameListArr[i].id == id) {
      productToDisplay = i;
      break;
    }
  }
  document.getElementById("modalDivToDisplay").innerHTML = `
<div id="myModal" class="modal">
<div class="modal-content">
  <span id="closeBtn" class="close">&times;</span>
  <h1>${gameListArr[productToDisplay].title}</h1>
  <p>
    ${gameListArr[productToDisplay].info}
  </p>
 <div class="cardBtn">
  <a href="#">Buy Now</a>
  <a href="./newsupdates.html">More News & Updates</a>
</div>
</div>
</div>
`;
  document.getElementById("closeBtn").addEventListener("click", () => {
    document.getElementById("modalDivToDisplay").innerHTML = "";
  });
};
// displayModal(9)
