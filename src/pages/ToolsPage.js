import LEDCalculator from "../tools/LEDCalculator";
import VoltageDropCalculator from "../tools/VoltageDropCalculator";

function ToolsPage() {

  return (

    <div style={{padding:"20px"}}>

      <h1>Electrical Tools</h1>

      <LEDCalculator />

      <VoltageDropCalculator />

    </div>

  );

}

export default ToolsPage;