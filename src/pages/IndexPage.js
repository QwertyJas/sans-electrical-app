import { useNavigate } from "react-router-dom";
import { rules } from "../data/rules";
function IndexPage() {

  const navigate = useNavigate();

  // Get unique chapters (first number of clause)
  const chapters = {};

  rules.forEach(rule => {
    const chapter = rule.clause.split(".")[0];

    if (!chapters[chapter]) {
      chapters[chapter] = [];
    }

    chapters[chapter].push(rule);
  });

  return (

    <div style={{padding:"20px"}}>

      <h1>SANS 10142 Index</h1>

      {Object.keys(chapters).map(chapter => (

        <div key={chapter} style={{marginBottom:"25px"}}>

          <h2>Chapter {chapter}</h2>

          <ul>

            {chapters[chapter].map(rule => (

              <li
                key={rule.clause}
                style={{cursor:"pointer", marginBottom:"6px"}}
                onClick={() => navigate("/?clause=" + rule.clause)}
              >
                {rule.clause} — {rule.title}
              </li>

            ))}

          </ul>

        </div>

      ))}

    </div>

  );

}

export default IndexPage;