import React from "react";
import Person from "./Person";

function PersonList() {
  //const names = ["Bruce", "Diana", "Unknown"];
  //const nameList = names.map((name) => <h1>{name}</h1>);
  const persons = [
    {
      namme: "person A",
      age: "25",
      course: "MCA",
    },
    {
      namme: "person B",
      age: "22",
      course: "BCA",
    },
    {
      namme: "person C",
      age: "21",
      course: "Btech",
    },
  ];
  const person1List = persons.map((person) => (
    <Person key={person.age} person={person}></Person>
  ));
  return <div>{person1List}</div>;
}

export default PersonList;
