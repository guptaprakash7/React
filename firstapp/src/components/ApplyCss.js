import React from "react";
import "./myStyle.css";
function ApplyCss(props) {
  const applyCss = props.isApplyCss ? "fontColor" : "";
  const applyInlineCss = {
    fontSize: "75px",
    color: "blue",
  };
  return (
    <div>
      <div>
        {" "}
        <h1 className={`${applyCss} font-xl`}>Apply CSS</h1>
      </div>
      <div>
        {" "}
        <h1 style={applyInlineCss}>Apply Inline CSS</h1>
        <h1 className="error">Apply Inline CSS</h1>
      </div>
    </div>
  );
}

export default ApplyCss;
