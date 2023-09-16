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

const carrouselContainer = document.getElementById("carrouselContainer");
headlines.map((headline, index) => {
  if (index < 7) {
    let carrousel = `
    <div class="info-container__hero">
            <a
              ${headline.link}
              ><div class="element-container">
                <div class="banner ${headline.category} hero-banner">
                  <p class="banner-text">${headline.tag}</p>
                </div>
                <div class="carrousel-imageholder">
                  <img
                    ${headline.picture}
                    ${headline.pictureDesc}
                    class="headline-image"
                  />
                </div>
                <div class="info-hero">
                  <p class="hero-text">
                    ${headline.articleInfo}
                  </p>
                </div>
              </div></a
            >
          </div>
    `;
    carrouselContainer.innerHTML += carrousel;
  }
});
