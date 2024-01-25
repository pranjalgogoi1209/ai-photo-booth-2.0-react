import React, { useEffect, useState } from "react";

export default function GeneratedImagePage({ generatedImage }) {
  const [isLoading, setIsLoading] = useState(false);
  generatedImage && console.log(generatedImage);

  useEffect(() => {
    if (generatedImage) {
      setIsLoading(true);
    }
  }, [generatedImage]);
  return (
    <div>
      {generatedImage ? (
        <img src={generatedImage} alt="generated image" />
      ) : (
        <span>loading</span>
      )}
    </div>
  );
}
