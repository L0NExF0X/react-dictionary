import React, { useState } from "react";
import axios from "axios";
import Data from "./Data";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [data, setData] = useState(null);

  function showDefinition(response) {
    setData(response.data);
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
        <input
          type="search"
          onChange={keywordUpdate}
          placeholder="Type a word"
          className="search-bar bg-dark text-light"
        />
        <input
          type="submit"
          value="Search"
          className="search-button bg-dark btn-outline-info"
        />
      </form>
      <Data data={data} />
    </div>
  );
}
