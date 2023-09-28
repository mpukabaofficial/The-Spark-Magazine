import { headlines } from "./allArticles.js";
import getTimeElapsed from "./date.js";
const suggestionContainer = document.getElementById("suggestions");
const length = headlines.length;
// create a randomizer
function randomNumbers() {
  const arraySize = 3;
  let array = [];
  let count = 0;
  while (count < arraySize) {
    let currenNUmber = getRandomNumber(length - 1);
    if (!array.includes(currenNUmber)) {
      array[count] = currenNUmber;
      count++;
    }
  }
  return array;
}

function getRandomNumber(max) {
  const randomFloat = Math.random();
  const randomInRange = randomFloat * max;
  return Math.floor(randomInRange);
}

// create suggestions based on the numbers
randomNumbers().forEach((number) => {
  let suggestion = `
    <a ${headlines[number].link} class="suggest-container">
    <div class="suggest-image__container">
      <img
      ${headlines[number].picture}
      ${headlines[number].pictureDesc}
        class="suggest-image"
      />
    </div>
    <div>
      <p class="suggest-title">${headlines[number].articleInfo}</p>
      <p class="suggest-date">${getTimeElapsed(headlines[number].date)}</p>
    </div>
  </a>
`;
  suggestionContainer.innerHTML += suggestion;
});
