import { IconButton, Tooltip, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";

const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
  padding: 10px;
`;

const StyledArrowIcon = styled(MdKeyboardArrowUp)`
  background-color: #cd5ff8;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 4px 20px rgba(160, 170, 180, 0.6);
`;

const ScrollToTop = () => {
  const [open, setOpen] = React.useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const handleClick = () => {
    setOpen(false);
    scroll.scrollToTop({ duration: 0 });
  };

  const handleScroll = () => {
    const scrollThreshold = 500;
    if (window.scrollY > scrollThreshold) setShouldRender(true);
    else setShouldRender(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderScrollToTopButton = () => (
    <Tooltip
      title="Scroll to top"
      placement="top"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <StyledIconButton
        size="large"
        aria-label="scroll to top"
        onClick={handleClick}
      >
        <StyledArrowIcon fontSize={40} />
      </StyledIconButton>
    </Tooltip>
  );

  return shouldRender && renderScrollToTopButton();
};

export default ScrollToTop;
