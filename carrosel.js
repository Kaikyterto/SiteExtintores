const track = document.querySelector(".track")
const slides = document.querySelectorAll(".slide")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")

let index = 0

function update() {
  track.style.transform = `translateX(-${index * 100}%)`
}

nextBtn.addEventListener("click", () => {
  index++
  if (index >= slides.length) {
    index = 0
      }
      
  update()
})

prevBtn.addEventListener("click", () => {
  index--
  if (index < 0) {
    index = slides.length - 1
  }
  update()
})
