import React from "react";
import "./Dictionary.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <br />
        <strong>Example: </strong>
        <em>"{props.example}"</em>
      </div>
    );
  } else {
    return null;
  }
}
