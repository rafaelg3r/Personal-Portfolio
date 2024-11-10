const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".skill-card-li").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false,
  startX,
  startScrollLeft,
  positionDiff;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowBtns[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowBtns[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // if clicked button is left, then subtract first card width from the carousel scrollLeft, else, add to it
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    showHideIcons();
    setTimeout(() => showHideIcons(), 60);
  });
});

const autoSlide = () => {
  positionDiff = Math.abs(positionDiff); //making positionDiff value to positive
  let valDifference = firstCardWidth - positionDiff;

  if (carousel.scrollLeft > startScrollLeft) {
    return (carousel.scrollLeft +=
      positionDiff > firstCardWidth / 2 ? valDifference : -positionDiff);
  }
  return (carousel.scrollLeft -=
    positionDiff > firstCardWidth / 2 ? valDifference : -positionDiff);
};

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of te carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  // Calculates the new scroll position based on the mouse movement
  e.preventDefault();
  positionDiff = e.pageX - startX;
  carousel.scrollLeft = startScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
if (dragging) {
  carousel.addEventListener("mouseleave", dragStop);
}
