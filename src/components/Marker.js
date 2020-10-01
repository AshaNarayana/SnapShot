import React from "react";

const Marker = ({ color, name }) => {
  return (
    <div
      className="marker"
      style={{ backgroundColor: color, cursor: "pointer" }}
      title={name}
    />
  );
};

export default Marker;
