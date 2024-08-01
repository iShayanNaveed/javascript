function calculateTime() {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";
  let dayNames = [
    "Sunaday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  hour = hour % 12;
  hour = hour ? hour : "12";
  hour = hour <= 10 ? "0" + hour : hour;
  minute = minute <= 10 ? "0" + minute : minute;
  document.getElementById("day").innerHTML = dayNames[day];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = minute;
  document.getElementById("ampm").innerHTML = ampm;
  setTimeout(calculateTime, 200);
}
window.addEventListener("load", calculateTime);
