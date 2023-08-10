// Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output:
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

const divClock = document.querySelector("#clock");

setInterval(printTime, 1000);

function printTime() {
  let now = new Date();

  //storing hours, minutes and seconds in variables
  // adding 0 before number, when number < 10
  let hours = now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`;
  let minutes =
    now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`;
  let seconds =
    now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`;

  let spanHours = document.createElement("span");
  let spanMinutes = document.createElement("span");
  let spanSeconds = document.createElement("span");
  let spanColon1 = document.createElement("span");
  let spanColon2 = document.createElement("span");
  spanHours.textContent = hours;
  spanMinutes.textContent = minutes;
  spanSeconds.textContent = seconds;
  spanHours.setAttribute("id", "hours");
  spanMinutes.setAttribute("id", "minutes");
  spanSeconds.setAttribute("id", "seconds");
  spanColon1.textContent = ":";
  spanColon2.textContent = ":";

  divClock.innerHTML = "";

  divClock.appendChild(spanHours);
  divClock.appendChild(spanColon1);
  divClock.appendChild(spanMinutes);
  divClock.appendChild(spanColon2);
  divClock.appendChild(spanSeconds);

  //print on console
  console.log(`${hours}:${minutes}:${seconds}`);
}
