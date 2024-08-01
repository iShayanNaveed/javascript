let work = document.getElementById("work");
let pencil = document.getElementById("pencil");
let allitems = document.getElementById("displayitems");
let userInput = document.getElementById("userInput");
let arrow = document.getElementById("arrow");

userInput.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    addItems();
  }
});
function addItems() {
  let div = document.createElement("div");
  div.className = "d-flex justify-content-around";
  allitems.appendChild(div);
  let heading = document.createElement("h2");
  let btn = document.createElement("button");
  btn.className = " xmark ";
  btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  heading.innerHTML = "-" + userInput.value;
  console.log(heading);
  div.appendChild(heading);
  div.appendChild(btn);
  btn.onclick = () => removeitems(div);
}
arrow.addEventListener("click", addItems);
function removeitems(div1) {
  //   heading.remove();
  //   btn.remove;
  div1.remove();
}
