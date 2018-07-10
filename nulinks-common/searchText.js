function trim(string) {
  return string.trim();
}

function toLower(string) {
  return string.toLowerCase();
}

function add(a, b) {
  return a + b;
}

function byScoreDesc(a, b) {
  return b.score - a.score;
}

function contains(string) {
  return function(text) {
    return trim(toLower(text)).indexOf(trim(toLower(string))) !== -1;
  };
}

function exact(string) {
  return function(text) {
    return trim(toLower(string)) === trim(toLower(text));
  };
}

function startsWith(string) {
  return function(text) {
    return trim(toLower(text)).startsWith(trim(toLower(string)));
  };
}

function xmlescape(text) {
  return text.replace(/&/g, "&amp;");
}

function scoreKeyword(text) {
  return function(keyword) {
    return [
      (contains(text)(keyword) ? 1 : 0),
      (startsWith(text)(keyword) ? 5 : 0),
      (startsWith(text)(keyword) ? ((20 - text.length) / 20.0) : 0), // Prefer shorter
      (exact(text)(keyword) ? 9999 : 0),
    ].reduce(add, 0);
  };
}

function scoreKeywords(text) {
  return function(keywords) {
    return keywords.map(function(keyword) {
      return {
        keyword: keyword,
        score: scoreKeyword(text)(keyword)
      };
    });
  };
}

function score(text) {
  return function(match) {
    const keywordsScored = scoreKeywords(text)(match.keywords).sort(byScoreDesc);
    return {
      score: keywordsScored.map(function(a) {return a.score}).reduce(add, 0)
             + scoreKeyword(text)(match.title)
             + (scoreKeyword(text)(match.target) / 1000)
             + (match.tuning ? (match.tuning / 100.0) : 0),
      representativeKeyword: keywordsScored[0].keyword,
      value: match,
    }
  };
}

function searchText(data) {
  return function(text) {
    return data
      .map(score(text))
      .filter(function(result) {return result.score >= 1})
      .sort(byScoreDesc);
  };
}

function toDefaultSuggestion(text, match) {
  return {
    description: xmlescape(toLower(match.representativeKeyword)) + " <match>" + xmlescape(match.value.title) + "</match> <url>" + xmlescape(match.value.target) + "</url>"
  };
}

function toSuggestion(match) {
  return {
    content: toLower(match.representativeKeyword),
    description: xmlescape(toLower(match.representativeKeyword)) + "  <match>" + xmlescape(match.value.title) + "</match> <url>" + xmlescape(match.value.target) + "</url>"
  };
}

if (typeof __CHROME_EXTENSION__ !== "undefined") {
  exports = {};
}
exports.searchText = searchText;
exports.default = searchText;
