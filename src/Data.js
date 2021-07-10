import React from "react";
import Results from "./Results";

export default function Data(props) {
  if (props.data) {
    return (
      <div className="Data">
        {props.data.map((results, index) => {
          return (
            <div key={index}>
              <Results results={results} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
