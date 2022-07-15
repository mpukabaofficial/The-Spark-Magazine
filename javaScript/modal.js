const popUp = document.getElementById("popUp");
const closePopUp = document.getElementById("closePopUp");
const modal_container = document.getElementById("modal_container");

popUp.addEventListener("click", () => {
  // modal_container.classList.add("show");
  alert("Comments option coming soon!");
});

closePopUp.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
