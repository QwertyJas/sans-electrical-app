import React from "react";

function RuleViewer({ rule }) {
  if (!rule) {
    return <p>Select a rule to view details.</p>;
  }

  const openStandard = () => {
    if (rule && rule.page) {
      window.location.href = "/standard?page=" + rule.page;
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
      <h2>
        Clause {rule.clause} — {rule.title}
      </h2>

      <div style={{ marginBottom: "10px" }}>
        <button style={{ marginRight: "5px" }}>Rule</button>
        <button style={{ marginRight: "5px" }}>Explanation</button>
        <button style={{ marginRight: "5px" }}>Changes</button>

        {/* IMPORTANT BUTTON */}
        <button onClick={openStandard}>
          Open in Standard
        </button>
      </div>

      <p>{rule.rule}</p>

      {rule.explanation && (
        <p style={{ marginTop: "10px", color: "#555" }}>
          {rule.explanation}
        </p>
      )}
    </div>
  );
}

export default RuleViewer;