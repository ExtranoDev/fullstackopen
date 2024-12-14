import Input from "./Input";

const Filter = ({ search, method }) => (
  <div>filter shown with {<Input data={search} method={method} />}</div>
);

export default Filter;
