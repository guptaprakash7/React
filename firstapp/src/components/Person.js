import React from "react";

function Person(props) {
  const { person } = props;
  console.log(props);
  return (
    <div>
      <h1>
        I am a {person.namme}. My age is {person.age}. I am student of{" "}
        {person.course}
      </h1>
    </div>
  );
}

export default Person;
