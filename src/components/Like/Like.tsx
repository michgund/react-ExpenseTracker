import React from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { useState } from "react";
import styles from "./Like.module.css";

interface Props {
  onClick: () => void;
}

export const Like = ({ onClick }: Props) => {
  const [heart, setHeart] = useState(true);

  const toggle = () => {
    setHeart(!heart);
    onClick();
  };

  return <>{heart ? <FcLike onClick={toggle} /> : <FcDislike onClick={toggle} />}</>;
};

export default Like;
