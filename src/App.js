import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";

function App() {
  const [entries, setEntries] = useState("");

  function onAddActivity(newEntry) {
    setEntries([...entries, newEntry]);
    console.log(entries);
  }
  return (
    <div className="App">
      <header></header>
      <main>
        <Form onAddActivity={onAddActivity} />
      </main>
    </div>
  );
}

export default App;
