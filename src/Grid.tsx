import React from "react";
import styles from "./styles/Grid.module.css";

interface GridProps {
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Grid;
