import Input from "./Input";

const PersonForm = ({ data, addPerson, hanldeInput }) => (
  <form onSubmit={addPerson}>
    <div>name: {<Input data={data.name} method={hanldeInput.name} />}</div>
    <div>
      number: {<Input data={data.number} method={hanldeInput.number} />}
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default PersonForm;
