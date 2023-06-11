import React from "react";

export const useScrollLock = () => {
  const lockScroll = React.useCallback(() => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "var(--scrollbar-compensation)";
    document.body.dataset.scrollLock = "true";

    // if (isiOS) {
    //   scrollOffset.current = window.pageYOffset;
    //   document.body.style.position = "fixed";
    //   document.body.style.top = `-${scrollOffset.current}px`;
    //   document.body.style.width = "100%";
    // }
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    // if (isiOS) {
    //   document.body.style.position = "";
    //   document.body.style.top = ``;
    //   document.body.style.width = "";
    //   window.scrollTo(0, scrollOffset.current);
    // }

    delete document.body.dataset.scrollLock;
  }, []);

  React.useLayoutEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.setProperty(
      "--scrollbar-compensation",
      `${scrollBarCompensation}px`
    );
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};
