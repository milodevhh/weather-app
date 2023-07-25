import Button from "../Button";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newEntry = {
      name: data.name,
      isForGoodWeather: data.isForGoodWeather,
    };

    onAddActivity(newEntry);

    event.target.reset();
  }
  return (
    <form>
      <h2>Add new Activity</h2>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="isForGoodWeather">Good-weather activity</label>
          <input
            type="checkbox"
            name="isForGoodWeather"
            id="isForGoodWeather"
          />
        </div>
        <div>
          <Button onAddActivity={handleSubmit} type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
