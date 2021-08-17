function hello() {
  document.querySelector("h2").innerHTML = "Hellyeah!";
}
/* first example
let counter = 0; */

//part of 3th example
if (!localStorage.getItem("counter")) {
  localStorage.setItem("counter", 0);
}

function count() {
  //part of 3th example
  let counter = localStorage.getItem("counter");

  counter++;
  document.querySelector("h2").innerHTML = counter;
  localStorage.setItem("counter", counter);

  /* first example
    if (counter % 10 === 0) {
        alert(`Counter is now ${counter}`);
    }
    */
}

document.addEventListener("DOMContentLoaded", function () {
  //part of 3th example
  document.querySelector("h2").innerHTML = localStorage.getItem("counter");

  document.querySelector("button").onclick = count;

  /* part of 2th example
    setInterval(count, 1000); */
});
