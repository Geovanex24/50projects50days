const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText; // get current count

    const increment = target / 200; // increment value - how fast or slow the counter increments

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`; // increment count
      setTimeout(updateCounter, 10); // call updateCounter again after 10ms
    } else {
      counter.innerText = target; // set to target value when done. ensure it doesn't exceed or be the exact value
    }
  };
  updateCounter();
});
