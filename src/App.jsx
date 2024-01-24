import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CaptureImagePage from "./pages/CaptureImagePage";
import KnowMorePage from "./pages/KnowMorePage";
import AvatarPage from "./pages/AvatarPage";

export default function App() {
  const [capturedImage, setCapturedImg] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/capture-image"
          element={<CaptureImagePage setCapturedImg={setCapturedImg} />}
        />
        <Route path="/know-more" element={<KnowMorePage />} />
        <Route
          path="/avatar"
          element={<AvatarPage capturedImage={capturedImage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
