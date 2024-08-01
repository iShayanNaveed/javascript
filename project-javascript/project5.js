let increase = document.getElementById("in");
let decrease = document.getElementById("de");
let count = 0;
increase.addEventListener("click", () => changeCount(1));
decrease.addEventListener("click", () => changeCount(-1));

function changeCount(num) {
  count += num;
  //   console.log(num);
  document.getElementById("count").innerHTML = count;
}
// MORTALS CRADLES
