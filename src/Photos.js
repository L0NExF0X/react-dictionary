import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-md-4 p-0" key={index}>
                <a href={photo.src.original} target="_blank" rel="norefferer">
                  <img
                    className="img-fluid"
                    src={photo.src.large}
                    alt={photo.photographer_url}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
