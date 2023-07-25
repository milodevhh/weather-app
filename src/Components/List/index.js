export default function List({ entries, isGoodWeather, isForGoodWeather }) {
  return (
    <div>
      entries.isForGoodWeather === isGoodWeather ? (
      <>
        <h3>The weather is awesome! Go outside - Your activities:</h3>
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              <p>{entry.name}</p>
            </li>
          ))}
        </ul>
      </>
      ) : (
      <>
        <h3>Bad weather outside! Here's what you can do now:</h3>
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              <p>{entry.name}</p>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
}
