import { useState } from "react";

function LEDCalculator() {

  const [wattsPerMeter, setWattsPerMeter] = useState("");
  const [length, setLength] = useState("");

  const totalLoad = wattsPerMeter * length;
  const recommendedDriver = totalLoad * 1.25;

  return (

    <div style={{marginTop:"40px", padding:"20px", border:"1px solid #ccc"}}>

      <h2>LED Driver Calculator</h2>

      <p>Calculate driver size for LED strip lighting.</p>

      <div style={{marginBottom:"10px"}}>

        <label>Watts per meter:</label><br/>

        <input
          type="number"
          value={wattsPerMeter}
          onChange={(e) => setWattsPerMeter(e.target.value)}
        />

      </div>

      <div style={{marginBottom:"10px"}}>

        <label>Length (meters):</label><br/>

        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

      </div>

      <h3>Total Load: {totalLoad} W</h3>

      <h3>Recommended Driver: {recommendedDriver.toFixed(0)} W</h3>

    </div>

  );

}

export default LEDCalculator;