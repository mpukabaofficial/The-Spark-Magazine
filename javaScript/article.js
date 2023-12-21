import suggestions from "./articleSuggestions.js";
// date

const lastModified = document.lastModified;
const lastModifiedText = document.getElementById("lastEdited");
const date = new Date(lastModified);
const day = date.getDate();
const month = date.toLocaleString("default", { month: "long" });
const year = date.getFullYear();

lastModifiedText.innerHTML = `Last Edited: ${month} ${day}, ${year}`;

// suggestions

// suggestions();

// changing the size of a picture once pressed
const picture = document.getQuerySelectorAll(".article-images");
picture.forEach((pic) => {
  pic.addEventListener("click", () => {
    pic.classList.toggle("article-images--large");
  });
});
