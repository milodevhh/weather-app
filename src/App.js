import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import { uid } from "uid";
import List from "./Components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [],
  });
  const isGoodWeather = true;
  const goodWeatherActivity = entries.filter(
    (entry) => entry.isForGoodWeather === isGoodWeather
  );

  console.log(entries);
  function handleAddActivity(newEntry) {
    setEntries([...entries, { id: uid(), ...newEntry }]);
  }
  return (
    <div className="App">
      <header>
        <h1>Weather & Activities App</h1>
      </header>
      <main>
        <List entries={goodWeatherActivity} isGoodWeather={isGoodWeather} />
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}

export default App;
