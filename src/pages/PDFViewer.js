import { useLocation } from "react-router-dom";

function PDFViewer() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = query.get("page") || 1;

  const openExternal = () => {
    window.open(`/SANS10142.pdf#page=${page}`, "_blank");
  };

  return (
    <div style={{ padding: "10px" }}>
      
      <h2>Standard</h2>
      <p>Opening page: {page}</p>

      <iframe
        src={`/SANS10142.pdf#page=${page}`}
        width="100%"
        height="500px"
        title="PDF Viewer"
      />

      {/* fallback button */}
      <button 
        onClick={openExternal}
        style={{
          marginTop: "10px",
          padding: "10px",
          width: "100%"
        }}
      >
        Open PDF (if not loading)
      </button>

    </div>
  );
}

export default PDFViewer;