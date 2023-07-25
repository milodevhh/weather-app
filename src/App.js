import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import { uid } from "uid";

function App() {
  const [entries, setEntries] = useState([]);
  console.log(entries);
  function handleAddActivity(newEntry) {
    setEntries([...entries, { id: uid(), ...newEntry }]);
  }
  return (
    <div className="App">
      <header>Weather & Activities App</header>
      <main>
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}

export default App;
