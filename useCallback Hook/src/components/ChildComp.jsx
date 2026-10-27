import React from "react";

const ChildComp = React.memo((props) => {
  console.log("child component got re-rendered");

  return (
    <div>
      <button onClick={props.handleClick}>{props.buttonName}</button>
    </div>
  );
});

export default ChildComp;
