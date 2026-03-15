function PDFViewer() {

  return (

    <div style={{padding:"40px"}}>

      <h1>SANS 10142 Full Standard</h1>

      <p>Reference the full wiring standard below.</p>

      <iframe
        src="/SANS10142.pdf"
        width="100%"
        height="800px"
        title="SANS Standard"
      />

    </div>

  );

}

export default PDFViewer;