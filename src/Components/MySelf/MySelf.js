import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house }) => {
  return (
    <div>
      <h5>Myself</h5>
      <p>
        <small>House: {house} </small>
        <Special></Special>
      </p>
    </div>
  );
};

export default MySelf;
