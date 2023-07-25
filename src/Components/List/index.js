export default function List({ entries }) {
  return (
    <>
      <h3>Your activities:</h3>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <h3>{entry.name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
