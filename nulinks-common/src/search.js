import { toLower } from "./util.js";
const trim = (string) => string.trim();
const stripDashes = (string) => string.replace(/\-/g, "");

const enhance2 = (enhancer) => (func) => (a) => (b) =>
  func(enhancer(a))(enhancer(b));

const lowered = enhance2(toLower);
const trimmed = enhance2(trim);
const dashStripped = enhance2(stripDashes);

const normalized = (func) => lowered(trimmed(dashStripped(func)));

export const add = (a, b) => a + b;
export const byScoreDesc = (a, b) => b.score - a.score;

// With space ensures that the query appears at the beginning of a word
export const contains = normalized(
  (query) => (value) => value.indexOf(query) !== -1,
);
export const exact = normalized((query) => (value) => query === value);
export const startsWith = normalized(
  (query) => (value) => value.startsWith(query),
);

// About how often would the typical student access this site during their stay at NEU:
const USAGE_FREQUENCY_SCALE_FACTOR = {
  DAILY: 3,
  "A FEW TIMES A WEEK": 2.6,
  "A FEW TIMES A SEMESTER": 2.3,
  "ONCE A SEMESTER": 2,
  "ONCE A YEAR": 1.5,
  ONCE: 1,
};

// Evaluate two strings for different properties
const evaluateString = (query) => (value) => ({
  exact: exact(query)(value),
  startsWith: startsWith(query)(value),
  contains: contains(query)(value),
});

// Score the similarity of two strings
const scoreString = (query) => (value) => {
  const values = evaluateString(query)(value);
  return values.exact * 5 + values.startsWith * 4 + values.contains;
};

const scoreKeyword = (query) => (keyword) => ({
  score: scoreString(query)(keyword) * 3,
  value: keyword,
});

const scoreOthers = (query) => (link) =>
  scoreString(query)(link.title || "") +
  scoreString(query)(link.target || "") +
  scoreString(query)(link.description || "");

const score = (query) => (link) => {
  const keywordsScored = link.keywords
    .map(scoreKeyword(query))
    .sort(byScoreDesc);
  const bestKeyword = keywordsScored[0];
  const defaultKeyword = link.keywords[0];

  if (bestKeyword.score > 0) {
    // If any keywords matched, base the score on the best keyword.
    return {
      score:
        bestKeyword.score * USAGE_FREQUENCY_SCALE_FACTOR[link.usageFrequency],
      representativeKeyword: bestKeyword.value,
      value: link,
    };
  } else {
    // If no keywords matched, base the score on the title, description, and target.
    return {
      score:
        scoreOthers(query)(link) *
        USAGE_FREQUENCY_SCALE_FACTOR[link.usageFrequency],
      representativeKeyword: defaultKeyword,
      value: link,
    };
  }
};

export const search = (links) => (query) =>
  links
    .map(score(query))
    .filter((result) => result.score > 0)
    .sort(byScoreDesc);
