import { useState } from "react";
import Title from "./component/title";

function App() {
  const [title, setTitle] = useState("111");
  const changeTitleFn = (t) => {
    setTitle(t);
  };

  return (
    <>
      <Title title={title} changeTitle={changeTitleFn} />
    </>
  );
}

export default App;
