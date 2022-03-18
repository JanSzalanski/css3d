const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
const camera = document.querySelector(".camera");
const Btn1 = document.queryCommandValue(".buttonA");
const Btn2 = document.queryCommandValue(".buttonB");
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
