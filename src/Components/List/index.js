export default function List({ entries, isGoodWeather, isForGoodWeather }) {
  console.log(entries);
  return (
    <>
      <h3>
        {isGoodWeather
          ? "The weather is awesome! Go outside - Your activities"
          : "Bad weather outside! Here's what you can do now:"}
      </h3>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <p>{entry.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
