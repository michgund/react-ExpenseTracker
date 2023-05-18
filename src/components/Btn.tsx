import React, { ReactNode } from "react";
import "./Btn.module.css";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Btn = ({ children, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;
