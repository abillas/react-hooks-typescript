import React from "react";

import "./Summary.css";

const Summary = (props: any) => {
  return (
    <div className="summary">
      <h1>{props.name}</h1>
      <p>
        Gender: <span className="summary-output">{props.gender}</span>
      </p>
      <p>
        Height: <span className="summary-output">{props.height}cm</span>
      </p>
      <p>
        Hair Color / Skin Color:{" "}
        <span className="summary-output">{props.hairColor}</span> /{" "}
        <span className="summary-output">{props.skinColor}</span>
      </p>
      <p>
        Appears in # Movies:{" "}
        <span className="summary-output">{props.movieCount}</span>
      </p>
    </div>
  );
};

export default Summary;
