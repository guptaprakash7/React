import React from "react";

function MemoComp() {
  console.log("memo comp");
  return <div>memo comp </div>;
}

export default React.memo(MemoComp);
