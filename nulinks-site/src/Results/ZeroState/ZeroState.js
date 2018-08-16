import React from 'react';

import { A } from '../../util/A';

import "./ZeroState.css";

import searching from './searching.svg';

export default () => (
  <li className="zeroState">
    <h2 className="tagline">Can't find what you're looking for?</h2>
    <img className="searchingIllustration" src={searching} alt=""/> {/* SVG provided by the lovely folks over at unDraw */}
    <div className="ctas">
      <A className="button" href="https://github.com/kj800x/nulinks/issues">Make a Suggestion</A>
    </div>
  </li>
)
