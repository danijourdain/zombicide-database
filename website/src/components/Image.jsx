import { useRef, useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import useFetchOnVisible from "../hooks/useFetchOnVisible";

function Image({ src }) {
  const ref = useRef(null);
  const [error, setError] = useState(false);

  const getSource = () => Promise.resolve(src); 
  const [data, loading] = useFetchOnVisible(ref, getSource);

  // missing src property or image path not found
  if (!src || error) {
    return (
      <ImagePlaceholder text="Image not found" />
    );
  }

  return (
    <div ref={ref}>
      {loading && <ImagePlaceholder text="Loading"/>}
      <img className="card-image"
        src={data}
        style={{}}
        onError={() => setError(true)}
      />
    </div>
  );
}

export default Image;