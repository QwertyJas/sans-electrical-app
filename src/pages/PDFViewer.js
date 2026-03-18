import { useLocation } from "react-router-dom";

function PDFViewer() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page")) || 1;

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h2>Standard</h2>
      <p>Page: {page}</p>

      <img
        src={`/pdf-pages/page_.jpg (${page}).jpg`}
        alt={`Page ${page}`}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default PDFViewer;