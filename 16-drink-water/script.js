const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

const highlightCups = (idx) => {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling?.classList.contains("full")
  )
    idx--;

  smallCups.forEach((cup, idx2) => {
    cup.classList.toggle("full", idx2 <= idx);
  });
  updateBigCup();
};

const updateBigCup = () => {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;
  const percentageFull = (fullCups / totalCups) * 100;
  const TOTAL_LITERS = 2;
  const remainedLiters = TOTAL_LITERS - fullCups * (TOTAL_LITERS / totalCups);

  liters.textContent = `${remainedLiters}L`;
  remained.style.height = `${(remainedLiters / TOTAL_LITERS) * 330}px`;

  percentage.style.height = `${percentageFull}%`;
  percentage.textContent = percentageFull !== 0 ? `${percentageFull}%` : "";

  // console.log(
  //   `${fullCups} cups full of ${totalCups}. Percentage: ${percentageFull}%`
  // );
};
