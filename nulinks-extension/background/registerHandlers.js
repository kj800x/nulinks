import NULINKS_DATA from "../nulinks-common/src/data.js";
import { search } from "../nulinks-common/src/search.js";
import { toDefaultSuggestion, toSuggestion } from "../nulinks-common/src/format.js";

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  const matches = search(NULINKS_DATA)(text);
  if (matches.length === 0) {
    chrome.omnibox.setDefaultSuggestion({"description": "NULinks"})
  }
  if (matches.length > 0) {
    chrome.omnibox.setDefaultSuggestion(toDefaultSuggestion(text, matches[0]))
  }
  if (matches.length > 1) {
    suggest(matches.slice(1).map(toSuggestion));
  }
});

chrome.omnibox.onInputEntered.addListener(text => {
  const matches = search(NULINKS_DATA)(text);
  if (text === "" || matches.length === 0) {
    const query = text !== "" ? `?q=${encodeURIComponent(text)}` : "";
    setTimeout(() => chrome.tabs.update(undefined, {url: chrome.extension.getURL(`pages/index.html${query}`)}), 10);
    return;
  }
  const match = matches[0].value;
  chrome.tabs.update(undefined, {url: match.target});
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: chrome.extension.getURL("pages/index.html")});
});
