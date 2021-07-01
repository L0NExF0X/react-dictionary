import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
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
        <input type="submit" value="Search" className="btn btn-outline-info" />
      </form>
    </div>
  );
}
