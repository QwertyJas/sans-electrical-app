import { useLocation } from "react-router-dom";

function PDFViewer() {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const page = query.get("page") || 1;

  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src={`/SANS10142.pdf#page=${page}`}
        width="100%"
        height="100%"
        title="PDF Viewer"
      />
    </div>
  );
}

export default PDFViewer;