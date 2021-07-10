import React from "react";
import Example from "./Example";
import Synonym from "./Synonym";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="mt-4">{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map((definitions, index) => {
        return (
          <section key={index}>
            <div className="definition">{definitions.definition}</div>
            <div className="example">
              <Example example={definitions.example} />
            </div>
            <div className="synonym">
              <Synonym synonyms={definitions.synonyms} />
            </div>
          </section>
        );
      })}
    </div>
  );
}
