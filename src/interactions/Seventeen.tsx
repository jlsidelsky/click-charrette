import React from "react";
import Box from "../Box";
import "../styles/Seventeen.css";

const Seventeen: React.FC = () => {
  const cursors = [
    "alias",
    "all-scroll",
    "help",
    "crosshair",
    "not-allowed",
    "zoom-in",
    "text",
    "vertical-text",
    "e-resize",
    "w-resize",
    "n-resize",
    "s-resize",
    "ne-resize",
    "nw-resize",
    "se-resize",
    "sw-resize",
    "move",
    "grab",
    "grabbing",
    "no-drop",
    "zoom-out",
    "wait",
    "context-menu",
    "col-resize",
    "copy",
  ];
  return (
    <Box span={3} className="seventeen">
      {cursors.map((e, index) => (
        <div
          key={index}
          className="seventeen-square"
          style={{ cursor: e }}
        ></div>
      ))}
    </Box>
  );
};

export default Seventeen;
