import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="mt-4">{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map((definitions, index) => {
        return (
          <div key={index}>
            <p>
              {definitions.definition}
              <br />
              <br />
              <em>{definitions.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
