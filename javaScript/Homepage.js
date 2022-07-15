filterObjects("all");
function filterObjects(c) {
  let x, i;

  x = document.getElementsByClassName("headline");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
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
