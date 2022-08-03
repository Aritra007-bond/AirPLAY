//let movies= [
//{ name:"falcon and the winter soilder",
//des:
//"This a animatory film about the dinasour with a world class animation.Must Watch"
//image: "images/slider1.png"
//},
//{ name:"falcon and the winter soilder",
//des:
//"This a animatory film about the dinasour with a world class animation.Must Watch"
//image: "images/slider2.png"
//},
//{ name:"falcon and the winter soilder",
//des:
//"This a animatory film about the dinasour with a world class animation.Must Watch"
//image: "images/slider3.png"
//},
//{ name:"falcon and the winter soilder",
//des:
//"This a animatory film about the dinasour with a world class animation.Must Watch"
//image: "images/slider4.png"
//},
//{ name:"falcon and the winter soilder",
//des:
//"This a animatory film about the dinasour with a world class animation.Must Watch"
//image:"images/slider6.png"
//},

//]

//video cards
const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtn = [...document.querySelectorAll(".pre-btn")];
let nxtBtn = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimentions = item.getBoundingClientRect();
  let containerWidth = containerDimentions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
