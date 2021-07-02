import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function showDefinition(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(showDefinition);
  }

  function keywordUpdate(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="mt-5">
        <div className="row mb-5">
          <div className="col-8">
            <input
              type="search"
              onChange={keywordUpdate}
              placeholder="Type a word"
              className="search-bar bg-dark text-light form-control"
            />
          </div>
          <div className="col">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-info"
            />
          </div>
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
