import React, { useState } from "react";
import axios from "axios";
import Data from "./Data";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [data, setData] = useState(null);
  const [onLoad, setOnLoad] = useState(false);
  const [photos, setPhotos] = useState(null);

  function showDefinition(response) {
    setData(response.data);
  }

  function showPhotos(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(showDefinition);

    let pexelsApiKey =
      "563492ad6f91700001000001b5bb5480036e4bc49f5d36e12552b02f";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(showPhotos);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
