import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";
import "./Dictionary.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="mt-5">{props.results.word}</h2>
        {props.results.phonetics.map((phonetics, index) => {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
        {props.results.meanings.map((meanings, index) => {
          return (
            <div key={index}>
              <Meaning meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
