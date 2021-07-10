import React from "react";
import "./Dictionary.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics mt-3">
      <a
        className="btn btn-outline-info bg-dark"
        href={props.phonetics.audio}
        target="_blank"
        rel="noreferrer"
      >
        Listen
      </a>
      {props.phonetics.text}
    </div>
  );
}
