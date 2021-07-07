import React from "react";
import "./Dictionary.css";

export default function Synonym(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        <br />
        <span>
          <strong>Synonym(s): </strong>
        </span>
        {props.synonyms.map((synonyms, index) => {
          return <li key={index}>{synonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
