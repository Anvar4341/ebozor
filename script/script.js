let navbar = document.querySelector(".site-navbar");
let navBtn = document.querySelector(".fa-bars");

navBtn.addEventListener("click", () => {
  navbar.style.cssText = "transition: all 1s ease; "
  navbar.style.cssText = "animation: sliderMenu linear 1s alternate;"
  navbar.classList.toggle("none")
})


let modal = document.querySelector(".modals")
let icon = document.querySelector(".icon");
let faTimes = document.querySelector(".fa-times")

icon.addEventListener("click", () => {
  modal.classList.toggle("none")
  hide()

})

faTimes.addEventListener("click", () => {
  modal.classList.toggle("none")
  opens()
})



function hide() {
  document.body.style.overflow = "hidden";
}

function opens() {
  document.body.style.overflow = "";
}


// create card
let primarybtn = document.querySelector("#create");
let decrBtn = document.querySelector(".decr")
let incrBtn = document.querySelector(".incr")
let row = document.querySelector(".row")
let modalList = document.querySelector(".wrapper-modal")


let cards = []

function Cards(elem) {
  this.img = img;
  this.h1 = h1;
  this.p = p;
  this.button = button;
}

function createDom () {
  cards.push(new Cards())
}

function createList() {
  let div = document.createElement("div")
  div.setAttribute("class", "col-md-4")
  div.innerHTML = `
      <div class="card">
      <div class="card-header">
        <img src="./img/img5.png" alt="images">
      </div>
      <div class="card-body">
        <h3>Mahsulot nomi</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusamus perferendis quae est laudantium pariatur molestiae, quo beatae ipsam magnam.</p>
        <div class="price">
          <p class="price-text">100$</p>
          <div class="price-list">
            <button class="decr btn btn-success">-</button>
            <p class="first-list">0</p>
            <button class="incr btn btn-success">+</button>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button class="w-100 btn btn-primary">Qo'shish</button>
      </div>
    </div>
  `
  modalList.appendChild(div)

}

primarybtn.addEventListener("click", () => {
  createList()
})




var swipers = new Swiper(".site-loader", {
      loop: true,
      // Optional parameters
      loop: true,

      // Optional parameter

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".container", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });
