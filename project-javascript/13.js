let container2 = document.getElementsByClassName("container2")[0];
let container3 = document.getElementsByClassName("container3")[0];
let checkIcon = document.getElementById("check");
let crossIcon = document.getElementById("cross");
let i = 0;
crossIcon.addEventListener("click", function () {
  cancelItems();
});
checkIcon.addEventListener("click", function () {
  createNote();
});

function typeNote() {
  container3.style.display = "block";
}
function cancelItems() {
  container3.style.display = "none";
}
function createNote() {
  let noteText = document.getElementById("note-text").value;
  let node0 = document.createElement("div");
  let node1 = document.createElement("h1");
  node1.className = "node1";
  node1.innerHTML = noteText;
  //   noteText = "";
  noteText.textContent = "";
  node0.style.margin = margin();
  node0.style.transform = rotate();
  node0.style.background = color();
  node0.appendChild(node1);

  container2.insertAdjacentElement("beforeend", node0);
  node0.addEventListener("mouseenter", function () {
    node0.style.transform += "scale(1.1)";
  });
  node0.addEventListener("mouseleave", function () {
    node0.style.transform = "scale(1)";
  });
  node0.addEventListener("dblclick", function () {
    node0.remove();
  });
  //   noteText.value = "";
  container3.style.display = "none";
}
function margin() {
  let random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

  return random_margin[Math.floor(Math.random() * random_margin.length)];
}
function rotate() {
  let random_rotate = [
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(-3deg)",
    "rotate(-5deg)",
    "rotate(-10deg)",
  ];
  //   return random_rotate[0];
  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}
function color() {
  let random_color = [
    "#c2ff3d",
    "#ffed38",
    "#3dc2ff",
    "#04e022",
    "#bc83e6",
    "#ebb328",
  ];
  if (i > random_color.length - 1) {
    i = 0;
  }
  return random_color[i++];
}
