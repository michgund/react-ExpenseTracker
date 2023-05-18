import React from "react";

interface props {
  content: string;
  maxChar: number;
  onMore: () => void;
}

const Expand = ({ content, maxChar, onMore }: props) => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <>
      {lorem.substring(0, maxChar)}
      <button onClick={onMore}>{content}</button>
    </>
  );
};

export default Expand;
