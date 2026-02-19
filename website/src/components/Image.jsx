import React, { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

function Image({ src }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // missing src property or image path not found
  if (!src || error) {
    return (
      <ImagePlaceholder text="Image not found" />
    );
  }

  return (
    <>
      {!loaded && <ImagePlaceholder text="Loading"/>}
      <img className="card-image"
        src={src}
        style={!loaded ? { display: "none" } : {}}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </>
  );
}

export default Image;