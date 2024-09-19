import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed } from "./pages/exporter/Pexporter";
import { Navbar, Sidebar } from "./components/exporter/Cexporter";
import { useState } from "react";

function App() {
  const [sideVisible, setSideVisible] = useState(true);
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
            gap: "3rem",
          }}
        >
          <Sidebar sideVisible={sideVisible} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Feed />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
