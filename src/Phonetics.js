import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics mt-3">
      <a
        className="btn btn-outline-info"
        href={props.phonetics.audio}
        target="_blank"
        rel="noreferrer"
      >
        Listen
      </a>
      <span className="text-muted">{props.phonetics.text}</span>
    </div>
  );
}
