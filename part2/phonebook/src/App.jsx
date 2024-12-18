import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newData, setPersonData] = useState({ name: "", number: "" });
  const [newSearch, setSearch] = useState("");

  const hook = () => {
    axios.get("http://localhost:3001/persons").then((resp) => {
      console.log(resp.data);
      setPersons(resp.data);
    });
  };

  useEffect(hook, []);

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={newSearch} method={handleSearchChange} />

      <h3>Add a new</h3>
      <PersonForm
        data={newData}
        addPerson={addNewPersons}
        hanldeInput={{
          name: handleDataChangeName,
          number: handleDataChangePhone,
        }}
      />

      <h3>Numbers</h3>
      <Persons data={personsToShow} />
    </div>
  );
};

export default App;
