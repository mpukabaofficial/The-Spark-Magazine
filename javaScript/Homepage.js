import { headlines } from "./allArticles.js";
import getTimeElapsed, { getFormatedDate, isWithin24Hours } from "./date.js";

const currentEdition = "Fifth Edition";
const currentEditionDisplay = document.getElementById("currentEdition");
currentEditionDisplay.innerHTML = currentEdition;

// show notifications if theres a new article
const notification = document.getElementById("notifications");
const notifications = `
  <div class="notifications">
    <p class="notifications-text">
      <a ${headlines[0].link} >New Article: ${headlines[0].articleInfo}</a>
    </p>
  </div>
`;

if (isWithin24Hours(headlines[0].date)) {
  notification.innerHTML = notifications;
}

// Social Media
const socials = document.getElementById("socials");
const navDetails = `
  <a href="/Spotlight/index.html" class="nav-links">Spotlights</a>
    <a href="https://www.instagram.com/thesparkmagazineesw/"
      ><div class="icons">
        <img src="/images/icons/instagram.svg" class="icon" alt="" /></div
    ></a>
  <a href="https://www.facebook.com/thesparksd/"
    ><div class="icons">
      <img
        src="/images/icons/facebook-f.svg"
        class="icon"
        alt=""
      /></div
  ></a>
  <a href="mailto:mpukaba.official@gmail.com"
    ><div class="icons">
      <img
        src="/images/icons/envelope-regular.svg"
        class="icon"
        alt=""
      /></div
  ></a>

`;
socials.innerHTML = navDetails;

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

const suggested = document.getElementById("suggestedTitle");
randomNumbers()
  .sort()
  .forEach((number) => {
    let navList = `
  
            <a ${headlines[number].link} class="nav-link">
              <h6 class="suggestedTitle">${headlines[number].articleInfo}</h6>
            </a>
        
    `;

    suggested.innerHTML += navList;
  });

// modal
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal-container");
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

const openModal = document.getElementById("openModal");
openModal.addEventListener("click", () => {
  modal.style.display = "block";
});
