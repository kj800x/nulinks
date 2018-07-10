chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  const matches = searchText(nulinks_data)(text);
  console.log(matches);
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
  const matches = searchText(nulinks_data)(text);
  if (text === "" || matches.length === 0) {
    setTimeout(() => chrome.tabs.update(undefined, {url: chrome.extension.getURL("pages/index.html")}), 10);
    return;
  }
  const match = matches[0].value;
  console.log(`Text "${text}" resolved to page "${JSON.stringify(match)}"`);
  chrome.tabs.update(undefined, {url: match.target});
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: chrome.extension.getURL("pages/index.html")});
});
