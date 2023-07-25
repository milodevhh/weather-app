import "./App.css";
import Form from "./Components/Form";
import { uid } from "uid";
import List from "./Components/List";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";

function App() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState([]);

  const isGoodWeather = weather.isGoodWeather;
  const goodWeatherActivity = entries.filter(
    (entry) => entry.isForGoodWeather === isGoodWeather
  );

  function handleAddActivity(newEntry) {
    setEntries([...entries, { id: uid(), ...newEntry }]);
  }
  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const weather = await response.json();

      setWeather(weather);
    }

    startFetching();
  }, []);
  console.log(entries);
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
