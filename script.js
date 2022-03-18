const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
const camera = document.querySelector(".camera");
const Btn1 = document.querySelector(".buttonA");
const Btn2 = document.querySelector(".buttonB");
const Cube2 = document.querySelector(".cube2");
let root = document.documentElement;
let cameraH = "2";
camera.style.setProperty("perspective-origin", `50% calc(50% - ${cameraH}em`);
output.innerHTML = 20;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
  cameraH = this.value / 10;
  camera.style.setProperty("perspective-origin", `50% calc(50% - ${cameraH}em`);
};

const BoxAnimation = () => {
  Cube2.classList.toggle("animation");
};

const BoxVisibility = () => {
  Cube2.classList.toggle("visibilty");
};
Btn1.addEventListener("click", BoxVisibility);
Btn2.addEventListener("click", BoxAnimation);
