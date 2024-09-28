import React from "react";
import ReactLoading from "react-loading";

export const StateLoading = () => {
  // "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";
  return (
    <div className={" center-div2"}>
      <ReactLoading type={"spokes"} color="#ddd" />
    </div>
  );
};
