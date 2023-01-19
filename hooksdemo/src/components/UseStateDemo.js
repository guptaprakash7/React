import React, { useEffect, useState, useContext } from "react";
import { firstContext, lastContext } from "../App";

function UseStateDemo() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState({ firstName: "", lastName: "" });

  const firstName = useContext(firstContext);
  const lastName = useContext(lastContext);
  useEffect(() => {
    console.log("Document Title changing");
    document.title = count;
  }, [count]);
  return (
    <div>
      Count {count}
      <button onClick={() => setCount((previouscount) => previouscount + 1)}>
        {" "}
        Counter{" "}
      </button>{" "}
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      ></input>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      ></input>
      <div>
        your firstName is {name.firstName}
        your lastName is {name.lastName}
        {firstName} {lastName}
      </div>
    </div>
  );
}

export default UseStateDemo;
