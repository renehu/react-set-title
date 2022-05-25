import React from "react";

function Title(props) {
  const { title, changeTitle } = props;

  return (
    <>
      <h1>{title}</h1>
      <button type="button" onClick={() => changeTitle("666")}>
        Change Title
      </button>
    </>
  );
}

export default Title;
