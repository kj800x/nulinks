import React from "react";

import { A } from "../../util/A";

import "./ZeroState.css";

import searching from "./searching.svg";

const makeTitle = searchQuery => {
  return encodeURIComponent(`Link Suggestion: ${searchQuery}`);
};

const makeBody = searchQuery => {
  return encodeURIComponent(
    `Suggested Keyword: ${searchQuery}\nSuggested Destination Page: TODO - FILL ME IN\n`
  );
};

export default ({ searchQuery }) => (
  <li className="zeroState">
    <h2 className="tagline">Can't find what you're looking for?</h2>
    <img className="searchingIllustration" src={searching} alt="" />{" "}
    {/* SVG provided by the lovely folks over at unDraw */}
    <div className="ctas">
      <A
        className="button"
        href={`https://github.com/kj800x/nulinks/issues/new?title=${makeTitle(
          searchQuery
        )}&body=${makeBody(searchQuery)}`}
      >
        Make a Suggestion
      </A>
    </div>
  </li>
);
