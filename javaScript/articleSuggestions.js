import { headlines } from "./allArticles.js";
import getTimeElapsed from "./date.js";

const suggestionContainer = document.getElementById("suggestions");
const stopWords = new Set(["the", "and", "for", "with", "from", "that", "this", "your", "you", "part", "edition", "fifth", "fourth", "third", "second", "first"]);
const topicGroups = [
  [" ai", "digital", "technology", "robot"],
  ["business", "market", "mining", "economy", "entrepreneur", "success"],
  ["music", "artist", "comedy", "poetry", "goddess", "creative"],
  ["spiritual", "church", "god", "called", "seasons", "dream"],
  ["women", "rights", "justice", "rejection", "self-esteem"],
  ["school", "education", "student", "courage", "discipline"],
];
const attributeValue = (attribute, value = "") => value.match(new RegExp(`${attribute}=['\"]([^'\"]+)`))?.[1] ?? "";
const normalizePath = (path = "") => decodeURIComponent(path).replace(/\\/g, "/").replace(/\/+$/, "").replace(/\.html$/i, "").toLowerCase();
const words = (text = "") => new Set(text.toLowerCase().match(/[a-z]{3,}/g)?.filter((word) => !stopWords.has(word)) ?? []);

export function getRecommendations(currentPath = window.location.pathname, pageTitle = document.title, limit = 3) {
  const normalizedCurrentPath = normalizePath(currentPath);
  const stories = headlines.filter((item) => item.type === "Article");
  const current = stories.find((item) => normalizePath(attributeValue("href", item.link)) === normalizedCurrentPath);
  const currentWords = words(current?.articleInfo ?? pageTitle);
  const currentText = `${current?.articleInfo ?? pageTitle} ${normalizedCurrentPath}`.toLowerCase();
  const currentTopics = topicGroups.filter((group) => group.some((keyword) => currentText.includes(keyword)));

  return stories
    .filter((item) => normalizePath(attributeValue("href", item.link)) !== normalizedCurrentPath)
    .map((item, index) => {
      const candidateWords = words(item.articleInfo);
      const sharedWords = [...candidateWords].filter((word) => currentWords.has(word)).length;
      const sameCategory = current && item.category === current.category ? 8 : 0;
      const sameEdition = current && item.tag === current.tag ? 4 : 0;
      const candidateText = `${item.articleInfo} ${attributeValue("href", item.link)}`.toLowerCase();
      const sameTopic = currentTopics.some((group) => group.some((keyword) => candidateText.includes(keyword))) ? 7 : 0;
      const candidateDirectory = normalizePath(attributeValue("href", item.link)).split("/").slice(0, -1).join("/");
      const currentDirectory = normalizedCurrentPath.split("/").slice(0, -1).join("/");
      return { item, index, score: sameCategory + sameEdition + sameTopic + (candidateDirectory === currentDirectory ? 3 : 0) + sharedWords * 3 };
    })
    .sort((a, b) => b.score - a.score || b.item.date - a.item.date || a.index - b.index)
    .slice(0, limit)
    .map(({ item }) => item);
}

export default function suggestions() {
  if (!suggestionContainer) return;
  getRecommendations().forEach((article) => {
    const link = document.createElement("a");
    link.href = attributeValue("href", article.link);
    link.className = "suggest-container";
    link.innerHTML = `<div class="suggest-image__container"><img src="${attributeValue("src", article.picture)}" alt="${attributeValue("alt", article.pictureDesc)}" class="suggest-image" loading="lazy" /></div><div class="suggest-info"><p class="suggest-title">${article.articleInfo}</p><p class="suggest-date">${article.tag} · ${getTimeElapsed(article.date)}</p></div>`;
    suggestionContainer.appendChild(link);
  });
}

suggestions();
