import { useSearchParams } from "react-router-dom";

function StandardPage() {

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  return (

    <div style={{padding:"20px"}}>

      <h1>SANS 10142 Standard</h1>

      <p>Opening page: {page}</p>

      <iframe
        src={"/SANS10142.pdf#page=" + page}
        width="100%"
        height="800px"
        title="SANS Standard"
      />

    </div>

  );

}

export default StandardPage;