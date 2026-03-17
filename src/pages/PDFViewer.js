import { useLocation } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PDFViewer() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page")) || 1;

  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      <h2>Standard</h2>
      <p>Opening page: {page}</p>

      <Document file="/SANS10142.pdf">
        <Page pageNumber={page} width={350} />
      </Document>
    </div>
  );
}

export default PDFViewer;