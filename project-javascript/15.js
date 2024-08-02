let input = document.getElementById("input");
let grid = document.getElementsByClassName("grid")[0];
let searchIcon = document.getElementById("search-box");
window.addEventListener("load", dayNightMode);
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    loadImg();
  }
});

function loadImg() {
  removeimg();
  const url =
    "https://api.unsplash.com/search/photos/?query=" +
    input.value +
    "&per_page=50&client_id=3j6uyueuE-_l8wRPdDVpAggNOHqS737kPc2tVc5Eo-M";
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert(response.staus);
      }
    })
    .then((data) => {
      let imgNodes = [];
      for (let i = 0; i < data.results.length; i++) {
        imgNodes[i] = document.createElement("div");
        imgNodes[i].className = "img";
        imgNodes[i].style.backgroundImage =
          "url(" + data.results[i].urls.raw + ")";
        imgNodes[i].addEventListener("dblclick", function () {
          window.open(data.result[i].links.download, "_blank");
        });
        grid.appendChild(imgNodes[i]);
      }
    });
}

function removeimg() {
  grid.innerHTML = "";
}
function dayNightMode() {
  let date = new Date();
  let hours = date.getHours();
  if (hours >= 7 && hours <= 19) {
    document.body.style.backgroundColor = "whitesmoke";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
}
