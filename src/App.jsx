import { useState } from "react";
import "./App.scss";
import Home from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
