const track = document.querySelector(".track");
const slides = Array.from(document.querySelectorAll(".slide"));
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const slidesToShow = 3;
const numPages = Math.ceil(slides.length / slidesToShow);
let currentPage = 0;

function update() {
  const newTransform = -currentPage * 100;
  track.style.transform = `translateX(${newTransform}%)`;
}

nextBtn.addEventListener("click", () => {
  currentPage++;
  if (currentPage >= numPages) {
    currentPage = 0;
  }
  update();
});

prevBtn.addEventListener("click", () => {
  currentPage--;
  if (currentPage < 0) {
    currentPage = numPages - 1;
  }
  update();
});

// Initialize the carousel position
update();
