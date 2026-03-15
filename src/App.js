import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import ToolsPage from "./pages/ToolsPage";
import StandardPage from "./pages/StandardPage";
import IndexPage from "./pages/IndexPage";

import "./App.css";

function App() {

  return (

    <Router>

      <div className="App">

        <Routes>

          <Route path="/" element={<SearchPage />} />

          <Route path="/index" element={<IndexPage />} />

          <Route path="/tools" element={<ToolsPage />} />

          <Route path="/standard" element={<StandardPage />} />

        </Routes>

        <nav
          style={{
            position: "fixed",
            bottom: "0",
            width: "100%",
            background: "#f0f0f0",
            borderTop: "1px solid #ccc",
            display: "flex",
            justifyContent: "space-around",
            padding: "10px 0"
          }}
        >

          <Link to="/">Search</Link>

          <Link to="/index">Index</Link>

          <Link to="/tools">Tools</Link>

          <Link to="/standard">Standard</Link>

        </nav>

      </div>

    </Router>

  );

}

export default App;