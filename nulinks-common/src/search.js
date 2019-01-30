import { toLower } from "./util.js";

export const trim = string => string.trim();
export const add = (a, b) => a + b;
export const byScoreDesc = (a, b) => b.score - a.score;
export const contains = string => text => trim(toLower(text)).indexOf(trim(toLower(string))) !== -1;
export const exact = string => text => trim(toLower(string)) === trim(toLower(text));
export const startsWith = string => text => trim(toLower(text)).startsWith(trim(toLower(string)));

const scoreKeyword = text => keyword => [
  (contains(text)(keyword) ? 1 : 0),
  (startsWith(text)(keyword) ? 5 : 0),
  (startsWith(text)(keyword) ? ((20 - text.length) / 20.0) : 0), // Prefer shorter
  (exact(text)(keyword) ? 9999 : 0),
].reduce(add, 0);

const scoreKeywords = text => keywords => keywords.map((keyword) => ({
  keyword: keyword,
  score: scoreKeyword(text)(keyword)
}));

const score = text => match => {
  const keywordsScored = scoreKeywords(text)(match.keywords).sort(byScoreDesc);
  return {
    score: keywordsScored.map(function(a) {return a.score}).reduce(add, 0)
           + scoreKeyword(text)(match.title)
           + (scoreKeyword(text)(match.target) / 1000)
           + (match.tuning ? (match.tuning / 100.0) : 0),
    representativeKeyword: keywordsScored[0].keyword,
    value: match,
  }
}

export const search = data => text => data
  .map(score(text))
  .filter(result => result.score >= 1)
  .sort(byScoreDesc);
