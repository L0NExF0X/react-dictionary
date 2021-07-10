import React from "react";
import "./Dictionary.css";

export default function Synonym(props) {
  if (props.synonyms) {
    return (
      <span className="Synonyms">
        <br />
        <br />
        <span>
          <strong>Synonym(s): </strong>
        </span>
        {props.synonyms.map((synonyms, index) => {
          return <span key={index}>{synonyms}</span>;
        })}
      </span>
    );
  } else {
    return null;
  }
}
