import { useState } from "react";

function VoltageDropCalculator() {

  const [current, setCurrent] = useState("");
  const [length, setLength] = useState("");
  const [resistance, setResistance] = useState("");

  const voltageDrop = (current * length * resistance) / 1000;

  return (

    <div style={{marginTop:"40px", padding:"20px", border:"1px solid #ccc"}}>

      <h2>Voltage Drop Calculator</h2>

      <p>Estimate voltage drop for cable runs.</p>

      <div style={{marginBottom:"10px"}}>

        <label>Current (Amps):</label><br/>

        <input
          type="number"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />

      </div>

      <div style={{marginBottom:"10px"}}>

        <label>Cable Length (meters):</label><br/>

        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

      </div>

      <div style={{marginBottom:"10px"}}>

        <label>Resistance Factor:</label><br/>

        <input
          type="number"
          value={resistance}
          onChange={(e) => setResistance(e.target.value)}
        />

      </div>

      <h3>Voltage Drop: {voltageDrop.toFixed(2)} V</h3>

    </div>

  );

}

export default VoltageDropCalculator;