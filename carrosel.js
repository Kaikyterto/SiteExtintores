const track = document.querySelector(".track");
const slides = Array.from(document.querySelectorAll(".slide"));
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const slidesToShow = 3;
const numPages = Math.ceil(slides.length / slidesToShow);
let currentPage = 0;

function getSlideWidth() {
  return slides[0].getBoundingClientRect().width;
}

function update() {
  const newTransform = -currentPage * 100;
  track.style.transform = `translateX(${newTransform}%)`;
}

nextBtn.addEventListener("click", () => {

  if (currentPage + 1 >= numPages) {
    const clones = slides
      .slice(0, slidesToShow)
      .map(slide => slide.cloneNode(true));

    for (let i = 0; i < slidesToShow; i++) {
      slides[i].remove();
    }

    slides.splice(0, slidesToShow);

    clones.forEach(clone => {
      track.appendChild(clone);
      slides.push(clone);
    });

    track.style.transition = "none";              
    track.style.transform = `translateX(-100%)`;  
    void track.offsetWidth;                       

    track.style.transition = "transform 0.8s";    
    track.style.transform = `translateX(-200%)`;
    console.log(currentPage) 
  } else {
    currentPage++;
    update();
    console.log(currentPage)
  }
});



prevBtn.addEventListener("click", () => {

  if (currentPage === 0) {

    const clones = slides
      .slice(-slidesToShow)
      .map(slide => slide.cloneNode(true)).reverse();

    slides
      .slice(-slidesToShow)
      .forEach(slide => slide.remove());

    slides.splice(-slidesToShow, slidesToShow);


    clones.forEach(clone => {
      track.prepend(clone);
      slides.unshift(clone);
    });


    track.style.transition = "none";
    track.style.transform = `translateX(-100%)`;
    void track.offsetWidth;

    track.style.transition = "transform 0.8s";
    track.style.transform = `translateX(0%)`;
    console.log(currentPage)

  } else {
    currentPage--;
    update();
  }

  console.log( currentPage);
});

// Initialize the carousel position
update();
