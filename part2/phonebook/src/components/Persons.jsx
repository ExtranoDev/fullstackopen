const Entity = ({ props }) => (
  <p>
    {props.name} {props.number}
  </p>
);

const Persons = ({ data }) => {
  return data.map((person) => <Entity key={person.name} props={person} />);
};

export default Persons;
