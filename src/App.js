import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import IndexPage from "./pages/IndexPage";
import ToolsPage from "./pages/ToolsPage";
import PDFViewer from "./pages/PDFViewer";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<SearchPage />} />

        <Route path="/index" element={<IndexPage />} />

        <Route path="/tools" element={<ToolsPage />} />

        {/* THIS is the important one */}
        <Route path="/standard" element={<PDFViewer />} />

      </Routes>
    </Router>
  );
}

export default App;