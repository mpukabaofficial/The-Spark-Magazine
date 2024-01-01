import { headlines } from "./allArticles.js";
import getTimeElapsed, { getFormatedDate } from "./date.js";

const currentEdition = "Fifth Edition";
const currentEditionDisplay = document.getElementById("currentEdition");
currentEditionDisplay.innerHTML = currentEdition;

const headlinesContainer = document.getElementById("headlines");
headlines.forEach((headline, index) => {
  let headlineList = `
  <div class="headline ${index === 0 ? "main-headline" : ""} ${
    headline.category === "cover" && headline.tag === currentEdition
      ? "guest-headline"
      : ""
  } ">
            <a
              ${headline.link}
              class="headline-links"
            >
              <div class="headline-imageholder">
                <img
                  ${headline.picture}
                  class="headline-image"
                  ${headline.pictureDesc}
                  loading="lazy"
                />
              </div>
              <div class="info-container">
                <div></div>
                <div class="article-info"><p>${headline.articleInfo}</p></div>
                <div class="article-date__container">
                  <p class="full-date">${getFormatedDate(headline.date)}</p>
                  <p>|</p>
                  <p class="article-date">${getTimeElapsed(headline.date)}</p>
                </div>
                <div class="article-type">
                  <p class="fine-print">${headline.type}</p>
                </div>
              </div>
            </a>
            <div class="banner ${headline.category} hero-banner">
              <p class="banner-text">${headline.tag}</p>
            </div>
          </div>
  `;
  headlinesContainer.innerHTML += headlineList;
});

// choose 5 numbers between 0 and headlines.length - 1
// create a randomizer
function randomNumbers() {
  const arraySize = 5;
  let array = [];
  let count = 0;
  while (count < arraySize) {
    let currenNUmber = getRandomNumber(headlines.length - 1);
    if (!array.includes(currenNUmber)) {
      array[count] = currenNUmber;
      count++;
    }
  }
  return array.sort();
}

function getRandomNumber(max) {
  const randomFloat = Math.random();
  const randomInRange = randomFloat * max;
  return Math.floor(randomInRange);
}

console.log(randomNumbers());

const suggested = document.getElementById("suggestedTitle");
randomNumbers().forEach((number) => {
  let navList = `
  
            <a ${headlines[number].link} class="nav-link">
              <h6 class="suggestedTitle">${headlines[number].articleInfo}</h6>
            </a>
        
    `;

  suggested.innerHTML += navList;
});
