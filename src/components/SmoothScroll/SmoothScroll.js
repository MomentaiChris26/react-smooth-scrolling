import React, { useEffect, useRef } from "react";

import "./SmoothScroll.css";

// returns the current innerWidth and innerHeight of the window.
import useWindowSize from "../../hooks/useWindowSize";

const SmoothScroll = ({ children }) => {
  const windowSize = useWindowSize();

  // translateY property on the div, on the fly.
  const scrollingContainerRef = useRef();

  // data is not a state because we dont want the component to re-render each time we scroll
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // useEffect only runs when on window size change
  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  // sets the height equal to the scrollingContainerRef div
  function setBodyHeight() {
    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`;
  }

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div className="parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
