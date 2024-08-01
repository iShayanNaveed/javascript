let index = 0;
showimg(index);

let left = document.getElementById("left");
let right = document.getElementById("right");

left.addEventListener("click", () => showimg(-1));
right.addEventListener("click", () => showimg(1));

function showimg(i) {
  index += i;
  let images = document.getElementsByClassName("images");
  console.log(images);
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  if (index > images.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = images.length - 1;
  }
  images[index].style.display = "block";
  dots[index].className += "active";
}
