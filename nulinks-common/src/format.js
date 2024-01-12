import { toLower } from "./util.js";

const xmlEscape = (text) => text.replace(/&/g, "&amp;");

export function toDefaultSuggestion(match) {
  return {
    description:
      xmlEscape(toLower(match.representativeKeyword)) +
      " <match>" +
      xmlEscape(match.value.title) +
      "</match> <url>" +
      xmlEscape(match.value.target) +
      "</url>",
  };
}

export function toSuggestion(match) {
  return Object.assign(
    {
      content: toLower(match.representativeKeyword),
    },
    toDefaultSuggestion(match),
  );
}
