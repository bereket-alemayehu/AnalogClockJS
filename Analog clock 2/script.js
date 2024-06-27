"use strict";

let hr = document.getElementById("hr");
let min = document.getElementById("mi");
let sec = document.getElementById("se");

setInterval(() => {
  const day = new Date();

  let hh = (day.getHours() + 5) * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;

  //  this is for the digital clock at the bottom
  let hour = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");
  let T = new Date();
  let h = T.getHours() + 5;
  let m = T.getMinutes();
  let s = T.getSeconds();

  if (h > 12) h = h - 12;
  let am = h - 6 >= 12 ? "AM" : "PM";

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
});
