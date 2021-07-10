import React from "react";
import Example from "./Example";
import Synonym from "./Synonym";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="mt-4">{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map((definitions, index) => {
        return (
          <div className="mb-5" key={index}>
            <p>
              <strong>Definition:</strong> {definitions.definition}
              <Example example={definitions.example} />
              <Synonym synonyms={definitions.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
