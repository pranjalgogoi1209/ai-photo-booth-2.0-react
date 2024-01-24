import React from "react";

export default function AvatarPage({ capturedImage }) {
  capturedImage && console.log("capturedImage =>", capturedImage);
  return (
    <div>
      <h1>Avatar Page</h1>
    </div>
  );
}
