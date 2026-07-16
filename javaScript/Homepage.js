import { headlines } from "./allArticles.js";
import getTimeElapsed, { getFormatedDate, isWithin24Hours } from "./date.js";

const currentEdition = "Fifth Edition";
document.getElementById("currentEdition").textContent = currentEdition;
document.getElementById("copyrightYear").textContent = new Date().getFullYear();

const attributeValue = (attribute, value) => value.match(new RegExp(`${attribute}=['\"]([^'\"]+)`))?.[1] ?? "";
const articles = headlines.filter((item) => item.type === "Article");

if (articles[0] && isWithin24Hours(articles[0].date)) {
  const href = attributeValue("href", articles[0].link);
  document.getElementById("notifications").innerHTML = `<div class="notifications"><a href="${href}">New story — ${articles[0].articleInfo}</a></div>`;
}

const headlinesContainer = document.getElementById("headlines");
articles.slice(0, 11).forEach((article) => {
  const href = attributeValue("href", article.link);
  const src = attributeValue("src", article.picture);
  const alt = attributeValue("alt", article.pictureDesc);
  const card = document.createElement("article");
  card.className = "headline";
  card.innerHTML = `<a href="${href}" class="headline-link">
    <div class="headline-imageholder"><img src="${src}" class="headline-image" alt="${alt}" loading="lazy" /></div>
    <div class="story-meta"><span class="story-tag">${article.tag}</span><span>·</span><span>${article.type}</span></div>
    <h3 class="story-title">${article.articleInfo}</h3>
    <p class="story-date">${getFormatedDate(article.date)} · ${getTimeElapsed(article.date)}</p>
  </a>`;
  headlinesContainer.appendChild(card);
});

const pickCategories = ["themed", "other-edition", "spiritual", "pearlS", "cover"];
const editorPicks = pickCategories
  .map((category) => articles.find((article, index) => index > 0 && article.category === category))
  .filter((article, index, list) => article && list.indexOf(article) === index)
  .slice(0, 5);

editorPicks.forEach((article) => {
  const link = document.createElement("a");
  link.href = attributeValue("href", article.link);
  link.className = "suggestion-link";
  link.innerHTML = `<p class="suggestedTitle">${article.articleInfo}</p>`;
  document.getElementById("suggestedTitle").appendChild(link);
});

const overlay = document.getElementById("modal-container");
const openButton = document.getElementById("openModal");
const setMenu = (open) => {
  overlay.classList.toggle("open", open);
  overlay.setAttribute("aria-hidden", String(!open));
  openButton.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
};
openButton.addEventListener("click", () => setMenu(true));
document.getElementById("closeModal").addEventListener("click", () => setMenu(false));
overlay.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (event) => event.key === "Escape" && setMenu(false));
