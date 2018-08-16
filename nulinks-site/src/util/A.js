import React from 'react';

const isPWA = () => window.matchMedia('(display-mode: standalone)').matches;

export const A = props => <a {...props} target={isPWA() ? "_blank" : "_self"} />
