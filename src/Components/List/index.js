export default function List({
  entries,
  isGoodWeather,
  isForGoodWeather,
  onDelete,
}) {
  return (
    <>
      <h3>
        {isGoodWeather
          ? "The weather is awesome! Go outside - Your activities"
          : "Bad weather outside! Here's what you can do now:"}
      </h3>
      <ul>
        {entries.map((entry) => (
          <>
            <li key={entry.id}>{entry.name}</li>
            <button type="button" title="delete entry" onClick={onDelete}>
              ✕
            </button>
          </>
        ))}
      </ul>
    </>
  );
}
