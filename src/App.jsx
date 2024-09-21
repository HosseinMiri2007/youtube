import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed, Video } from "./pages/exporter/Pexporter";
import { Navbar, Sidebar } from "./components/exporter/Cexporter";
import { useState } from "react";

function App() {
  const [sideVisible, setSideVisible] = useState(true);
  const [category, setCategory] = useState(0);

  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <Navbar setSideVisible={setSideVisible} />
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <Sidebar sideVisible={sideVisible} setCategory={setCategory} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Feed category={category} />} />
              <Route path="/video" element={<Video />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
