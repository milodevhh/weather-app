import Button from "../Button";

export default function Form() {
  return (
    <form>
      <h2>Add new Activity</h2>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="goodWeather">Good-weather activity</label>
          <input type="checkbox" name="goodWeather" id="goodWeather" />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
}
