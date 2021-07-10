import React, { useState } from "react";
import axios from "axios";
import Data from "./Data";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [data, setData] = useState(null);
  const [onLoad, setOnLoad] = useState(false);

  function showDefinition(response) {
    setData(response.data);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(showDefinition);
  }

  function keywordSearch(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setOnLoad(true);
    search();
  }

  function keywordUpdate(event) {
    setKeyword(event.target.value);
  }
  if (onLoad) {
    return (
      <div className="Dictionary">
        <h1>What word do you want to look up?</h1>
        <form onSubmit={keywordSearch}>
          <input
            type="search"
            onChange={keywordUpdate}
            defaultValue={props.defaultKeyword}
            className="search-bar bg-dark text-light"
          />
          <input
            type="submit"
            value="Search"
            className="search-button btn-outline-info"
          />
        </form>
        <Data data={data} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
