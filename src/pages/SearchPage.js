import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { rules } from "../data/rules";
import RuleViewer from "../components/RuleViewer";

function SearchPage() {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRule, setSelectedRule] = useState(null);

  const [searchParams] = useSearchParams();
  const clauseParam = searchParams.get("clause");

  const filteredRules = rules.filter(rule => {

    const text = (
      rule.clause +
      rule.title +
      rule.rule +
      rule.explanation
    ).toLowerCase();

    return text.includes(searchTerm.toLowerCase());

  });

  useEffect(() => {

    if (clauseParam) {

      const foundRule = rules.find(r => r.clause === clauseParam);

      if (foundRule) {

  setSelectedRule(foundRule);

  setTimeout(() => {

    const element = document.getElementById("rule-viewer");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

  }, 200);

}

    }

  }, [clauseParam]);

  return (

    <div style={{padding:"20px"}}>

      <h1>SANS Electrical Search</h1>

      <input
        type="text"
        placeholder="Search clause or topic..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width:"100%",
          padding:"10px",
          marginBottom:"20px"
        }}
      />

      <ul>

        {filteredRules.map(rule => (

          <li
            key={rule.clause}
            style={{
              cursor:"pointer",
              marginBottom:"10px"
            }}
            onClick={() => setSelectedRule(rule)}
          >

            <strong>{rule.clause}</strong> — {rule.title}

          </li>

        ))}

      </ul>

      <RuleViewer rule={selectedRule} />

    </div>

  );

}

export default SearchPage;