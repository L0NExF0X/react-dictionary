import React from "react";
import "./Dictionary.css";

export default function Example(props) {
  if (props.example) {
    return (
      <span className="Example">
        <br />
        <br />
        <strong>Example: </strong>
        <em>"{props.example}"</em>
      </span>
    );
  } else {
    return null;
  }
}
