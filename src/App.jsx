import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import SuperAdminRole from "./components/superAdmin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-dark " style={{width:'100%',height:'100vh'}}>
      <SuperAdminRole />
    </div>
  );
}

export default App;
