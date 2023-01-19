import logo from "./logo.svg";
import "./App.css";
import UseStateDemo from "./components/UseStateDemo";
import React from "react";
import Newfile from "./newfile";
export const firstContext = React.createContext();
export const lastContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <firstContext.Provider value={"prakash"}>
        <lastContext.Provider value={"gupta"}>
          <UseStateDemo></UseStateDemo>
        </lastContext.Provider>
      </firstContext.Provider> */}
      <Newfile></Newfile>
    </div>
  );
}

export default App;
