const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let range = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(range);
  }
  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = 1 - load / 100;
  bg.style.filter = `blur(${15 - (load / 3 - 3)}px)`;
  //   loadText.style.opacity = scale(load, 0, 100, 1, 0);
  //   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

/**https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers */
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
