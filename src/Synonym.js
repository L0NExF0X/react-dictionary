import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  if (props.synonyms) {
    return (
      <span className="Synonym">
        {props.synonyms.map((synonyms, index) => {
          return (
            <span className="synonyms" key={index}>
              {synonyms}
            </span>
          );
        })}
      </span>
    );
  } else {
    return null;
  }
}
