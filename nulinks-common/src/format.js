import { toLower } from "./util.js";

const xmlEscape = text => text.replace(/&/g, "&amp;");

export function toDefaultSuggestion(text, match) {
  return {
    description: xmlEscape(toLower(match.representativeKeyword)) + " <match>" + xmlEscape(match.value.title) + "</match> <url>" + xmlEscape(match.value.target) + "</url>"
  };
}

export function toSuggestion(match) {
  return {
    content: toLower(match.representativeKeyword),
    description: xmlEscape(toLower(match.representativeKeyword)) + " <match>" + xmlEscape(match.value.title) + "</match> <url>" + xmlEscape(match.value.target) + "</url>"
  };
}