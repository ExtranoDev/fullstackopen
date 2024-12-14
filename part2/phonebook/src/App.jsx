import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newData, setPersonData] = useState({ name: "", number: "" });
  const [newSearch, setSearch] = useState("");

  const handleDataChangeName = (e) => {
    setPersonData({ ...newData, name: e.target.value });
  };
  const handleDataChangePhone = (e) => {
    setPersonData({ ...newData, number: e.target.value });
  };
  const handleSearchChange = (e) => setSearch(e.target.value);

  const personsToShow =
    newSearch == ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(newSearch.toLowerCase())
        );

  const addNewPersons = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newData.name)) {
      return alert(`${newData.name} is already added to phonebook`);
    }
    const newPerson = {
      name: newData.name,
      number: newData.number,
    };

    setPersons(persons.concat(newPerson));
    setPersonData({ name: "", number: "" });
  };

  const Header = ({ title }) => <h2>{title}</h2>;

  return (
    <div>
      <Header title="Phonebook" />
      <Filter search={newSearch} method={handleSearchChange} />

      <Header title="Add a new" />
      <PersonForm
        data={newData}
        addPerson={addNewPersons}
        hanldeInput={{
          name: handleDataChangeName,
          number: handleDataChangePhone,
        }}
      />

      <Header title="Numbers" />
      <Persons data={personsToShow} />
    </div>
  );
};

export default App;
