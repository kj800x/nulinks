import React from "react";

const isPWA = () => window.matchMedia("(display-mode: standalone)").matches;

// https://stackoverflow.com/a/24600597
const isMobile = /Mobi/.test(navigator.userAgent);

export const A = (props) => {
  const { mobileHref, href, ...passedProps } = props;

  return (
    <a
      {...passedProps}
      target={isPWA() ? "_blank" : "_self"}
      href={isMobile && props.mobileHref ? props.mobileHref : props.href}
    >
      {props.children}
    </a>
  );
};
