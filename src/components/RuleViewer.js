import { useState } from "react";

function RuleViewer({ rule }) {

  const [tab, setTab] = useState("rule");

  if (!rule) {
    return <p>Select a rule to view details.</p>;
  }

  const openStandard = () => {

    if (rule && rule.page) {
      window.location.href = "/standard?page=" + rule.page;
    }

  };

  return (

  <div
    id="rule-viewer"
    style={{
      marginTop: "20px",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#fff9c4"
    }}
    >

      <h2>
        Clause {rule.clause} — {rule.title}
      </h2>

      <div style={{ marginBottom: "15px" }}>

        <button
          onClick={() => setTab("rule")}
          style={{ marginRight: "10px" }}
        >
          Rule
        </button>

        <button
          onClick={() => setTab("explanation")}
          style={{ marginRight: "10px" }}
        >
          Explanation
        </button>

        <button
          onClick={() => setTab("changes")}
          style={{ marginRight: "10px" }}
        >
          Changes
        </button>

        <button onClick={openStandard}>
          Open in Standard
        </button>

      </div>

      {tab === "rule" && (
        <div>
          <p>{rule.rule}</p>
        </div>
      )}

      {tab === "explanation" && (
        <div>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {rule.explanation}
          </pre>
        </div>
      )}

      {tab === "changes" && (
        <div>

          <h3 style={{ color: "red" }}>
            OLD RULE (Edition 3.1)
          </h3>

          <p
            style={{
              background: "#ffe6e6",
              padding: "10px"
            }}
          >
            {rule.old_rule}
          </p>

          <h3 style={{ color: "green" }}>
            NEW RULE (Edition 3.2)
          </h3>

          <p
            style={{
              background: "#e6ffe6",
              padding: "10px"
            }}
          >
            {rule.new_rule}
          </p>

        </div>
      )}

    </div>

  );

}

export default RuleViewer;