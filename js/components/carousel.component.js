const initializeCarousel = () => {
  let carouselContainer = document.getElementById("carouselContainer");
  let firstCard = 0;
  let secondCard = 1;
  let thirdCard = 2;
  let fourthCard = 3;
  const display = () => {
    carouselContainer.innerHTML = `
  <div class="card" data-item="${gameListArr[firstCard].dataItem}">
  <img src="${gameListArr[firstCard].imgUrl}" alt="" />
  <div class="content">
    <h4>
      ${gameListArr[firstCard].title}
      <button id="myBtn">
        <i class="bx bx-info-circle"></i>
      </button>
    </h4>
    <div class="progress-line"><span></span></div>
    <div class="info">
      <i class="bx bxs-heart"></i>
      <p>Price<br /><span>$${gameListArr[firstCard].price}</span></p>
      <a href="#">Play Now</a>
    </div>
  </div>
</div>
<div class="card" data-item="${gameListArr[secondCard].dataItem}">
  <img src="${gameListArr[secondCard].imgUrl}" alt="" />
  <div class="content">
    <h4>
    ${gameListArr[secondCard].title}
      <button id="myBtn">
        <i class="bx bx-info-circle"></i>
      </button>
    </h4>
    <div class="progress-line"><span></span></div>
    <div class="info">
      <i class="bx bxs-heart"></i>
      <p>Price<br /><span>$${gameListArr[secondCard].price}</span></p>
      <a href="#">Play Now</a>
    </div>
  </div>
</div>
<div class="card" data-item="${gameListArr[thirdCard].dataItem}">
  <img src="${gameListArr[thirdCard].imgUrl}" alt="" />
  <div class="content">
    <h4>
    ${gameListArr[thirdCard].title}
      <button id="myBtn">
        <i class="bx bx-info-circle"></i>
      </button>
    </h4>
    <div class="progress-line"><span></span></div>
    <div class="info">
      <i class="bx bxs-heart"></i>
      <p>Price<br /><span>$${gameListArr[thirdCard].price}</span></p>
      <a href="#">Play Now</a>
    </div>
  </div>
</div>
<div class="card" data-item="${gameListArr[fourthCard].dataItem}">
  <img src="${gameListArr[fourthCard].imgUrl}" alt="" />
  <div class="content">
    <h4>
    ${gameListArr[fourthCard].title}
      <button id="myBtn">
        <i class="bx bx-info-circle"></i>
      </button>
    </h4>
    <div class="progress-line"><span></span></div>
    <div class="info">
      <i class="bx bxs-heart"></i>
      <p>Price<br /><span>$${gameListArr[fourthCard].price}</span></p>
      <a href="#">Play Now</a>
    </div>
  </div>
</div>
<i class="bx bxs-chevron-left left-arrow" id="backwardBtn"></i>
<i class="bx bxs-chevron-right right-arrow" id="forwardBtn"></i>
  `;

    let forwardBtn = document.getElementById("forwardBtn");
    if (forwardBtn) {
      forwardBtn.addEventListener("click", forwardCarouselCard);
    }
    let backwardBtn = document.getElementById("backwardBtn");
    if (backwardBtn) {
      backwardBtn.addEventListener("click", backwardCarouselCard);
    }
  };

  const forwardCarouselCard = () => {
    if (fourthCard + 1 <= gameListArr.length - 1) {
      fourthCard++;
    } else {
      fourthCard = 0;
    }
    thirdCard + 1 <= gameListArr.length - 1 ? thirdCard++ : (thirdCard = 0);
    secondCard + 1 <= gameListArr.length - 1 ? secondCard++ : (secondCard = 0);
    firstCard + 1 <= gameListArr.length - 1 ? firstCard++ : (firstCard = 0);
    display();
  };

  const backwardCarouselCard = () => {
    if (fourthCard - 1 >= 0) {
      fourthCard--;
    } else {
      fourthCard = gameListArr.length - 1;
    }
    thirdCard - 1 >= 0 ? thirdCard-- : (thirdCard = gameListArr.length - 1);
    secondCard - 1 >= 0 ? secondCard-- : (secondCard = gameListArr.length - 1);
    firstCard - 1 >= 0 ? firstCard-- : (firstCard = gameListArr.length - 1);
    display();
  };
  display();
};

initializeCarousel();
