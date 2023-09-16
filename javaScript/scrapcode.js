/*this code is for making a pop-up window */
const openwindow = document.querySelectorAll("[data-target-open]");
console.log(openwindow);
const closewindow = document.querySelectorAll("[data-target-close]");

openwindow.forEach((button) => {
  button.addEventListener("click", () => {
    const window = document.getElementById("window");

    openWindow(window, button);
  });
});

closewindow.forEach((button) => {
  button.addEventListener("click", () => {
    const window = document.querySelector(button.dataset.targetClose);
    closeWindow(window);
  });
});

function openWindow(window) {
  if (window == null) return;
  window.classList.add("active");
  const button = document.getElementById("button");
  button.classList.remove("active");
}

function closeWindow(window) {
  if (window == null) return;
  window.classList.remove("active");
}

/*this code is for making a filter*/
filterObjects("all");
function filterObjects(c) {
  let headlineCard, indexOfheadline;

  headlineCard = document.getElementsByClassName("headline");
  if (c == "all") c = "";
  for (
    indexOfheadline = 0;
    indexOfheadline < headlineCard.length;
    indexOfheadline++
  ) {
    removeClass(headlineCard[indexOfheadline], "show");
    if (headlineCard[indexOfheadline].className.indexOf(c) > -1)
      addClass(headlineCard[indexOfheadline], "show");
  }
}

function addClass(element, name) {
  let i, arr, arr2;
  arr = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr.indexOf(arr2[i]) == -1) element.className += " " + arr2[i];
  }
}
function removeClass(element, name) {
  let i, arr, arr2;
  arr = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    element.className += " " + arr2[i];
    while (arr.indexOf(arr2[i]) > -1) arr.splice(arr.indexOf(arr2[i]), 1);
  }
  element.className = arr.join(" ");
}
